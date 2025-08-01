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
      name: "coverImage",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "cardContent",
      type: "array",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "paragraph",
          type: "textarea",
          required: true,
          minLength: 10,
          maxLength: 500,
        },
        {
          name: "images",
          type: "array",
          fields: [
            {
              name: "image",
              type: "upload",
              relationTo: "media",
            },
          ],
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
