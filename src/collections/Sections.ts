import type { CollectionConfig } from "payload";

export const Sections: CollectionConfig = {
  slug: "sections",
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "description",
      type: "textarea",
    },
    {
      name: "image",
      type: "array",
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
        },
      ],
    },
    {
      name: "paragraphs",
      type: "array",
      fields: [
        {
          name: "paragraph",
          type: "textarea",
        },
      ],
    },
    {
      name: "bookRecomndation",
      type: "array",
      fields: [
        {
          name: "book",
          type: "text",
        },
      ],
    },
    {
      name: "resources",
      type: "array",
      fields: [
        {
          name: "resourcelinks",
          type: "text",
        },
        {
          name: "resourceName",
          type: "text",
        },
      ],
    },
  ],
};
