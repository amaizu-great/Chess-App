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
  const year = new Date().getFullYear().toString();
  const month = new Date().getMonth().toString();
  const day = new Date().getDay().toString();
  const hours = new Date().getHours().toString();
  const mins = new Date().getMinutes().toString();
  const secs = new Date().getSeconds().toString();

  const date = `${year}:${month}:${day}:${hours}:${mins}:${secs}`;
  console.log(date);
  try {
    const { email } = await req.json();

    const newUser = new User();
    newUser.Games = {};

    await initDataSource();
    const userRepository = dataSource.getRepository(User);
    const userExist = await userRepository.findOneBy({
      email: email,
    });

    if (userExist) console.log(userExist.Games);
    
    return NextResponse.json(userExist);
  } catch (error) {
    return NextResponse.json({ error_message: error });
  }
}
