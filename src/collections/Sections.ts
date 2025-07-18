import type { CollectionConfig } from "payload";

export const Sections: CollectionConfig = {
  slug: 'sections',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'userId',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'image',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'link',
      type: 'text',
    },
    {
      name: 'linkName',
      type: 'text',
    },
    {
      name: 'paragraphs',
      type: 'array',
      fields: [
        {
          name: 'paragraph',
          type: 'textarea',
        },
      ],
    },
    {
      name: 'bookRecomndation',
      type: 'array',
      fields: [
        {
          name: 'book',
          type: 'text',
        },
      ],
    },
    {
      name: 'notes',
      type: 'relationship',
      relationTo: 'notes',
      hasMany: true,
    },
  ],
};
