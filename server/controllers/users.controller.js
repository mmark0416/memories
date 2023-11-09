import User from "../models/user.model.js";
import mongoose from "mongoose";

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist." });

    const isPasswordCorrect = existingUser.comparePassword(password);
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials." });

    const token = await existingUser.generateToken();

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

export const signUp = async (req, res) => {
  const { firstName, lastName, confirmPassword, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(404).json({ message: "User already exist." });

    if (password !== confirmPassword)
      return res.status(404).json({ message: "Passwords don't match." });

    const newUser = await User.create({
      name: `${firstName} ${lastName}`,
      email,
      password,
    });

    const token = await newUser.generateToken();

    res.status(200).json({ result: newUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

export const googleLogin = async (req, res) => {
  const userData = req.userData;
  try {
    const user = await User.findOneAndUpdate(
      { email: userData.email },
      { name: userData.name, email: userData.email },
      { new: true, upsert: true }
    );

    const token = await user.generateToken();

    res.status(200).json({ result: user, token });
  } catch (error) {
    res.status(500).json({ error, message: "Something went wrong." });
  }
};
