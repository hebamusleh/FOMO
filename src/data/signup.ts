export interface StepOneProps {
  data: StepOneData;
  onChange: (field: keyof StepOneData, value: string) => void;
}

export interface StepTwoData {
  pronoun: "" | "he" | "she" | "they";
  major: "" | "software engineering" | "uxui design" | "computer science";
  photo: File | null;
  goals: string;
  bio: string;
  linkedin: string;
}

export type Role = "student" | "mentor";

export interface StepOneData {
  role: Role;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  dob: {
    dd: string;
    mm: string;
    yyyy: string;
  };
}

interface DOB {
  dd: string;
  mm: string;
  yyyy: string;
}

export interface SignupData extends StepTwoData {
  role: Role;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  dob: DOB;
  experience: string;
  specialties: string;
}

export interface StepThreeData {
  tracks: string;
  skills: string;
  welcome: string;
  experienceYears: string;
  termsAccepted: boolean;
  bio: string;
  experience: string;
  specialties: string;
  loading: boolean;
}

export type Pronoun = "" | "he" | "she" | "they";
export type Major =
  | ""
  | "software engineering"
  | "uxui design"
  | "computer science";

export interface StepOneData {
  role: "student" | "mentor";
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  dob: { dd: string; mm: string; yyyy: string };
}

export interface StepTwoData {
  pronoun: Pronoun;
  major: Major;
  photo: File | null;
  goals: string;
  bio: string;
  linkedin: string;
  experience?: string;
  specialties?: string;
}

export interface StepThreeData {
  tracks: string;
  skills: string;
  welcome: string;
  experienceYears: string;
  linkedin: string;
  termsAccepted: boolean;
}
