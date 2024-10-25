import { dbConnect } from "@/lib/DB";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { User } from "@/model/usermodel";

export const POST = async (request: Request) => {
  try {
    const { name, email, password } = await request.json();

    // Connect to the database
    await dbConnect();

    // Encrypt password
    const hashPassword = await bcrypt.hash(password, 10);

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User with this email already exists" },
        { status: 409 }
      );
    }

    // Define and save new user data
    const newUser = new User({
      name,
      email,
      password: hashPassword,
    });
    await newUser.save();

    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 201 }
    );
  } catch (error:any) {
    console.error("Error handling registration:", error.message || error);
    return NextResponse.json(
      { message: `Error processing registration: ${error.message || error}` },
      { status: 500 }
    );
  }
};
