import type { CollectionConfig } from "payload";

export const Mentors: CollectionConfig = {
  slug: "mentors",
  admin: {
    useAsTitle: "userId",
  },
  access: {
    read: () => true,
    update: ({ req: { user } }) => {
      if (!user) return false;
      if (user?.roles?.includes("Admin")) return true;
      return { userId: { equals: user.id } };
    },
  },
  fields: [
    {
      name: "userId",
      type: "relationship",
      relationTo: "users",
      required: true,
      unique: true,
      filterOptions: { role: { equals: "mentor" } },
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
      name: "profilePhoto",
      type: "upload",
      relationTo: "media" as any,
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
      relationTo: "tracks" as any,
    },
    {
      name: "posts",
      type: "relationship",
      relationTo: "posts" as any,
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
