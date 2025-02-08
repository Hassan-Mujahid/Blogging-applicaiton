import User from "../models/users.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/errorHandler.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username.trim() === "" ||
    email.trim() === "" ||
    password.trim() === ""
  ) {
    next(errorHandler(400, "All fields are required!"));
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
    next(error);
  }
};

export const signin = async (req, res, next) => {
  try {
    const { email, password } = await req.body;
    console.log(email, password);

    if (!email || !password || email.trim() === "" || password.trim() === "") {
      return next(errorHandler(401, "All fields are required"));
    }

    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, "Username or password is incorrect!"));
    }

    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(404, "Username or password is incorrect!"));
    }

    const { password: pass, ...rest } = validUser._doc;

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    return res
      .status(200)
      .cookie("access_token", token, { httpOnly: true })
      .json(rest);
  } catch (err) {
    return next(err);
  }
};

export const googleAuth = async (req, res, next) => {
  try {
    const { name, email, googlePhotoUrl } = await req.body;

    const user = await User.findOne({ email });

    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      const { password, ...rest } = user._doc;
      res
        .status(200)
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .json(rest);
    } else {
      const generatePassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);

      const hashedPassword = bcryptjs.hashSync(generatePassword, 10);
      const newUser = new User({
        username:
          name.toLowerCase().split(" ").join("") +
          Math.random().toString(9).slice(-4),
        email: email,
        password: hashedPassword,
        profilePhoto: googlePhotoUrl,
      });
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      const { password, ...rest } = newUser._doc;
      res
        .status(200)
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .json(rest);
    }
  } catch (err) {
    next(err);
  }
};
