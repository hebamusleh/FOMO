export interface ILoginBody {
  email: string;
  password: string;
}
export interface ISignUpBody {
  fullName: string;
  role: "Student" | "Mentor";
  email: string;
  password: string;
  confirmPassword: string;
  dateOfBirth: string;
  pronoun: string;
  major?: string;
  avatar: File;
  goals?: string;
  bio: string;
  linkedin?: string;
  job?: string;
  track?: string;
  skills?: string;
  message?: string;
  yearOfExperience?: number;
}

export interface IContactBody {
  fullName: string;
  email: string;
  message: string;
}

export interface ISignUpResponse {
  success: boolean;
  message: string;
  user?: {
    id: string;
    fullName: string;
    email: string;
    role: "Student" | "Mentor";
  };
}
