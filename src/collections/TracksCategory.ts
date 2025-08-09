import type { CollectionConfig } from "payload";

export const TracksCategory: CollectionConfig = {
  slug: 'track-categories',
   access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
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
      relationTo: 'tracks' as any,
      hasMany: true,
    },
  ],
};


