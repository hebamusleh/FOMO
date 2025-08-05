// // REVIEWED
import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  admin: { useAsTitle: "email" },
  auth: true,
  fields: [
    {
      name: "email",
      type: "email",
      required: true,
      unique: true,
    },
    {
      name: "password",
      type: "text",
      required: true,
    },
    {
      name: "full name",
      type: "text",
      required: true,
    },
    {
      name: "profilePhoto",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "role",
      type: "select",
      options :[
        {
          label: "Admin",
          value: "admin",
        },
        {
          label: "Student",
          value: "student",
        },
         {
          label: "Mentor",
          value: "mentor",
        },
      ]
    },
  ],
};