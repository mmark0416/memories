import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, require: true },
  password: { type: String },
  id: { type: String },
});

userSchema.pre("save", async function (password) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateToken = async function () {
  const token = await jwt.sign(
    { id: this._id, email: this.email },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
  return token;
};

export default mongoose.model("User", userSchema);
