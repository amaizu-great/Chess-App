import dataSource from "@/lib/typeorm";
import { NextResponse } from "next/server";
import { User } from "../../../entities/user";

// Ensure the data source is initialized
const initDataSource = async () => {
  if (!dataSource.isInitialized) {
    try {
      await dataSource.initialize();
    } catch (error) {
      return { error_message: error };
    }
  }
};

export async function POST(req: Request) {
  try {
    const { email, name } = await req.json();
    
    const newUser = new User();
    newUser.name = name;
    newUser.email = email;
    newUser.password = "";

    await initDataSource();
    const userRepository = dataSource.getRepository(User);
    const userExist = await userRepository.findOneBy({
      email: email,
    });

    if (!userExist) {
      await userRepository.save(newUser);
      return NextResponse.json("User has been saved");
    }

    return NextResponse.json("User already exist");
  } catch (error) {
    return NextResponse.json({ error_message: "route failed" });
  }
}
