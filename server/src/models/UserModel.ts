import { Schema, model } from "mongoose";

export interface IUser {
  userName: string;
  authentication: {
    password: string;
    salt: string;
    sessionToken: string;
  };
  email: string;
  token: Number;
  role: Number;
}

const userSchema = new Schema<IUser>(
  {
    userName: { type: String, required: true },
    authentication: {
      type: {
        password: {
          type: String,
          required: true,
          select: false,
        },
        salt: {
          type: String,
          select: false,
        },
        sessionToken: {
          type: String,
          select: false,
        },
      },
      required: true,
    },
    email: {
      type: String,
      required: true,
      validate: {
        validator: (value: string) =>
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value),
        message: "invalid email!",
      },
    },
    token: { type: Number, default: 0 },
    role: { type: Number, default: 0 }, //0: user, 1: admin
  },
  { collection: "user" }
);

export const User = model("user", userSchema);
