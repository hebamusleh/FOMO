import type { CollectionConfig } from "payload";

export const Mentors: CollectionConfig = {
  slug: "mentors",
  admin: {
    useAsTitle: "userId",
  },
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
      name: "yearOfExpe",
      type: "number",
      required: true,
    },
    {
      name: "skills",
      type: "textarea",
    },
    {
      name: "profilPhoto",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "urlLinkedin",
      type: "text",
    },
    {
      name: "welcomeStatement",
      type: "textarea",
    },
    {
      name: "isAgree",
      type: "checkbox",
    },
    {
      name: "expertTrackId",
      type: "relationship",
      relationTo: "tracks",
    },
    {
      name: "posts",
      type: "relationship",
      relationTo: "posts",
      hasMany: true,
    },
    {
      name: "articles",
      type: "relationship",
      relationTo: "articles",
      hasMany: true,
    },
    {
      name: "resources",
      type: "relationship",
      relationTo: "resources",
      hasMany: true,
    },
  ],
};
