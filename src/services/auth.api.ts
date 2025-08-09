"use server";

import config from "@/payload.config";
import { getPayload, User } from "payload";

type Result = {
  exp?: number;
  token?: string;
  user?: User;
};

export const SignUpAPI = async (body: any) => {
  console.log("body", body);
  const payload = await getPayload({ config });
  try {
    const user = await payload.create({
      collection: "users",
      data: {
        email: body.email,
        password: body.password,
        firstName: body.firstName,
        lastName: body.lastName,
        roles: body.role,
      },
    });

    if (body.role === "student") {
      await payload.create({
        collection: "students" as any,
        data: {
          userId: user.id,
          firstName: body.firstName,
          lastName: body.lastName,
          goal: body.goals,
          bio: body.bio,
          birthday: body.dateOfBirth,
          major: body.major,
          pronoun: body.pronoun,
          profilePhoto: body.avatar,
          urlLinkedin: body.linkedin,
          isAgree: body.termsAccepted,
        },
      });
    } else if (body.role === "mentor") {
      await payload.create({
        collection: "mentors" as any,
        data: {
          userId: user.id,
          firstName: body.firstName,
          lastName: body.lastName,
          bio: body.bio,
          birthday: body.dateOfBirth,
          major: body.major,
          pronoun: body.pronoun,
          yearOfExpe: body.yearOfExperience,
          skills: body.skills,
          profilPhoto: body.avatar,
          urlLinkedin: body.linkedin,
          welcomeStatement: body.welcome,
          isAgree: body.termsAccepted,
          expertTrackId: body.track,
        },
      });
    }

    const result = await payload.login({
      collection: "users",
      data: {
        email: body.email,
        password: body.password,
      },
    });

    if (result.token) {
      return {
        success: true,
        message: "User creation successful",
        token: result.token,
      };
    }

    return {
      success: false,
      message: "User creation failed during login",
    };
  } catch (e) {
    return {
      success: false,
      message: e instanceof Error ? e.message : "User creation failed",
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
