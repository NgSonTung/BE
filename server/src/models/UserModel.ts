import { Schema, Types, model } from "mongoose";

interface IUser {
  userName: string;
  password: string;
  email: string;
  token: Number;
}

const userSchema = new Schema<IUser>(
  {
    userName: { type: String, required: true },
    password: { type: String, required: true },
    email: {
      type: String,
      required: true,
      validate: {
        validator: (value: string) =>
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value),
        message: "invalid email!",
      },
    },
    token: { type: Number, required: true, default: 0 },
  },
  { collection: "user" }
);

export const User = model("user", userSchema);
