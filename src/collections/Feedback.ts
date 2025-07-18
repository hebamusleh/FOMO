import type { CollectionConfig } from "payload";


export const Feedback: CollectionConfig = {
  slug: 'feedback',
  admin: {
    useAsTitle: 'id',
  },
  fields: [
    {
      name: 'idUser',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'rating',
      type: 'number',
      min: 1,
      max: 5,
    },
    {
      name: 'comments',
      type: 'textarea',
    },
    {
      name: 'created_at',
      type: 'date',
      defaultValue: () => new Date(),
    },
  ],
};