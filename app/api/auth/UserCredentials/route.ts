import dataSource from "@/lib/typeorm";
import { NextResponse } from "next/server";
import { User } from "../../../../entities/user";

// Ensure the data source is initialized
const initDataSource = async () => {
  if (!dataSource.isInitialized) {
    try {
      const test = await dataSource.initialize();
      if (test) return { done: "initialized" };
    } catch (error) {
      return { test: "counldn't initialize", error: error };
    }
  }
};

export async function POST(req: Request) {
  try {
    const { email, name, password } = await req.json();
    const newUser = new User();
    newUser.name = name;
    newUser.email = email;
    newUser.password = password;
    newUser.Games = {}

    await initDataSource();
    const userRepository = dataSource.getRepository(User);
    const userExist = await userRepository.findOneBy({
      email: email,
    });

    const handleLogin = async (password: any) => {
      let result;
      if (userExist) {
        if (userExist.password === "") {
          userExist.password = password;
          await userRepository.save(userExist);
          result = userExist;
        } else if (userExist.password === password) {
          result = userExist;
        } else {
          result = null;
        }
      } else {
        result = null;
      }
      return result;
    };

    const handleSignUp = async () => {
      let result;
      if (!userExist) {
        result = await userRepository.save(newUser);
      } else {
        result = null;
      }
      return result;
    };

    if (name) {
      const res = await handleSignUp();
      return NextResponse.json(res);
    } else {
      console.log("log in");
      const res = await handleLogin(password);
      return NextResponse.json(res);
    }
  } catch (error) {
    return NextResponse.json({ error_message: error });
  }
}
