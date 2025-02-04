import User from "../models/users.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username.trim() === "" ||
    email.trim() === "" ||
    password.trim() === ""
  ) {
    res.status(401).json({ message: "All fields are required!" });
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.json({ message: "User created Successfully!" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
