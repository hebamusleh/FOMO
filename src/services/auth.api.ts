import { ISignUpBody, ISignUpResponse } from "@/models";
import config from "@/payload.config";
import { cookies } from "next/headers";
import { getPayload, User } from "payload";

type Result = {
  exp?: number;
  token?: string;
  user?: User;
};
// export const loginAPI = async (body: ILoginBody) => {
//   try {
//   } catch (e) {}
// };

export const SignUpAPI = async (
  body: ISignUpBody,
): Promise<ISignUpResponse> => {
  const payload = await getPayload({ config });
  try {
    await payload.create({
      collection: "users",
      data: {
        fullName: body.fullName,
        role: body.role,
        email: body.email,
        password: body.password,
        confirmPassword: body.confirmPassword,
        dateOfBirth: body.dateOfBirth,
        pronoun: body.pronoun,
        major: body.major,
        avatar: body.avatar,
        goals: body.goals,
        bio: body.bio,
        linkedin: body.linkedin,
        job: body.job,
        track: body.track,
        skills: body.skills,
        message: body.message,
        yearOfExperience: body.yearOfExperience,
      },
    });
    const result: Result = await payload.login({
      collection: "users",
      data: {
        email: body.email,
        password: body.password,
      },
    });
    if (result.token) {
      let cookieStore = await cookies();
      cookieStore.set({
        name: "token",
        value: result.token,
        httpOnly: true,
        path: "/home",
      });
      return {
        success: true,
        message: "User creation successful",
      };
    } else {
      return {
        success: false,
        message: "User creation failed",
      };
    }
  } catch (e) {
    return {
      success: false,
      message: "User creation failed",
    };
  }
};

// export const logoutAPI = async () => {
//   try {
//     // Implement the API call to log out the user
//   } catch (e) {
//     // Handle error
//   }
// };
