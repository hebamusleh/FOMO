// // REVIEWED
import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  admin: { useAsTitle: "firstName" },
  auth: true,
  fields: [
    {
      name: "email",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "password",
      type: "text",
      required: true,
    },
    {
      name: "firstName",
      type: "text",
      required: true,
    },
    {
      name: "lastName",
      type: "text",
      required: true,
    },
    {
      name: "roles",
      type: "select",
      required: true,
      options: [
        { label: "Student", value: "student" },
        { label: "Mentor", value: "mentor" },
        { label: "Admin", value: "admin" },
      ],
    },
  ],
};
