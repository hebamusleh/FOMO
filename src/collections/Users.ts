// // REVIEWED
import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  admin: { useAsTitle: "firstName" },
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
      name: "profilePhoto",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "role",
      type: "text",
      required: true,
    },
  ],
};
