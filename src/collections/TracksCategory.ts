import type { CollectionConfig } from "payload";

export const TracksCategory: CollectionConfig = {
  slug: 'track-categories',
  admin: {
    useAsTitle: 'categoryName',
  },
  fields: [
    {
      name: 'categoryName',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'tracks',
      type: 'relationship',
      relationTo: 'tracks',
      hasMany: true,
    },
  ],
};


