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
      type: "select",
      required: true,
      options: [
        { label: "Software Engineering", value: "Software_Engineering" },
        { label: "Information Technology", value: "Information_Technology" },
        { label: "Computer Science", value: "Computer_Science" },
        { label: "Computer Engineering", value: "Computer_Engineering" },
        { label: "Other", value: "other" },
      ],
    },
    {
      name: "pronoun",
      type: "select",
      required: true,
      options: [
        { label: "She/Her", value: "she_her" },
        { label: "He/His", value: "he_his" },
      ],
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
