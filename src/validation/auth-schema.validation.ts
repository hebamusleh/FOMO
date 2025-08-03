import * as yup from "yup";

export const signupSchema = yup.object({
  // Step One
  role: yup.string().oneOf(["student", "mentor"]).required(),
  firstName: yup.string().required("First name required"),
  lastName: yup.string().required("Last name required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password required"),
  dob: yup.object({
    dd: yup.string().required("Day is required"),
    mm: yup.string().required("Month is required"),
    yyyy: yup.string().required("Year is required"),
  }),

  // Step Two
  pronoun: yup.string().required("Pronoun is required"),
  major: yup.string().required("Major is required"),
  photo: yup.mixed().nullable(),
  goals: yup.string().required("Goals are required"),
  bio: yup.string().required("Bio is required"),
  linkedin: yup.string().url("Must be a valid URL").nullable(),

  // Step Three (mentor only)
  tracks: yup.string().when("role", {
    is: "mentor",
    then: (schema) => schema.required("Tracks are required"),
    otherwise: (schema) => schema.notRequired(),
  }),
  skills: yup.string().when("role", {
    is: "mentor",
    then: (schema) => schema.required("Skills are required"),
    otherwise: (schema) => schema.notRequired(),
  }),
  welcome: yup.string().when("role", {
    is: "mentor",
    then: (schema) => schema.required("Welcome statement required"),
    otherwise: (schema) => schema.notRequired(),
  }),
  experience: yup.string().when("role", {
    is: "mentor",
    then: (schema) => schema.required("Years of experience required"),
    otherwise: (schema) => schema.notRequired(),
  }),
  termsAccepted: yup.boolean().oneOf([true], "You must accept terms"),
});
