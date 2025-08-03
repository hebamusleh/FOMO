import type { CollectionConfig } from "payload";

export const Students: CollectionConfig = {
  slug: "students",
  admin: {
    useAsTitle: "userId",
  },
  access: {
    create: () => true,
  },
  auth: true,
  fields: [
    {
      name: "userId",
      type: "relationship",
      relationTo: "users",
      required: true,
      unique: true,
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
      name: "goal",
      type: "text",
      required: true,
    },
    {
      name: "bio",
      type: "textarea",
      required: true,
    },
    {
      name: "birthday",
      type: "date",
      required: true,
    },
    {
      name: "major",
      type: "text",
      required: true,
    },
    {
      name: "pronoun",
      type: "text",
      required: true,
    },
    {
      name: "profilePhoto",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "urlLinkedin",
      type: "text",
    },
    {
      name: "isAgree",
      type: "checkbox",
    },
  ],
};
