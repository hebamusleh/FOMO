"use server";

import config from "@payload-config";
import { getPayload } from "payload";

import { User } from "@/payload-types";
import { cookies } from "next/headers";

interface LoginParams {
  email: string;
  password: string;
}

interface LoginResponse {
  success: boolean;
  errors?: string;
}

interface Result {
  exp?: number;
  token?: string;
  user?: User;
}
export async function LoginAPI({
  email,
  password,
}: LoginParams): Promise<LoginResponse> {
  const payload = getPayload({ config });
  try {
    const res: Result = await (await payload).login({
      collection: "users",
      data: {
        email,
        password,
      },
    });
    if (res.token) {
      const cookieStore = await cookies();
      cookieStore.set("payload-token", res.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/home",
      });
      return { success: true };
    } else {
      return { success: false, errors: "Invalid email or password." };
    }
  } catch (e) {
    console.log("Login error", e);
    return { success: false, errors: "Invalid email or password." };
  }
}
