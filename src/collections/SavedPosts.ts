import type { CollectionConfig } from "payload";

export const SavedPosts: CollectionConfig = {
  slug: 'saved-posts',
  admin: {
    useAsTitle: 'id',
  },
  fields: [
    {
      name: 'idStudent',
      type: 'relationship',
      relationTo: 'students',
      required: true,
    },
    {
      name: 'idPost',
      type: 'relationship',
      relationTo: 'posts',
      required: true,
    },
  ],
};


