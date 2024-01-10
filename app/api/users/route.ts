import { NextRequest } from "next/server";
import UserModel from "@/lib/models/User";
import { connectToDB } from "@/lib/mongoose";

export async function GET(request: NextRequest) {
  try {
    // Connect to the database when the application starts
    await connectToDB();
    const users = await UserModel.find().lean();

    return new Response(JSON.stringify(users));
  } catch (error) {
    console.error("GET error:", error);
    return new Response("An error occurred.", { status: 500 });
  }
}
