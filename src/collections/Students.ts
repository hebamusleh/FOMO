import type { CollectionConfig } from "payload";

export const Students: CollectionConfig = {
  slug: "students",
  admin: {
    useAsTitle: "userId",  
  },
  access: {
    create: ({ req: { user } }) => !!user, 
    read: ({ req: { user } }) => {
      if (!user) return false;
      if (user.role === "admin") return true;
      return { userId: user.id };    
    },
    update: ({ req: { user } }) => {
      if (!user) return false;
      if (user.role === "admin") return true;
      return { userId: user.id };
    },
    delete: ({ req: { user } }) => user?.role === "admin",
  },
  fields: [
    {
      name: "userId",
      type: "relationship",
      relationTo: "users",
      required: true,
      unique: true,
      filterOptions: { role: { equals: "student" } }, // يجيب بس  بـ role=student
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
      name: "urlLinkedin",
      type: "text",
    },
    {
      name: "isAgree",
      type: "checkbox",
    },
  ],
};