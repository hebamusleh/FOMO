import type { CollectionConfig } from "payload";
export const SavedArticles: CollectionConfig = {
  slug: 'saved-articles',
  admin: {
    useAsTitle: 'id',
  },
  fields: [
    {
      name: 'idStudent',
      type: 'relationship',
      relationTo: 'students' as any,
      required: true,
    },
    {
      name: 'idArticle',
      type: 'relationship',
      relationTo: 'articles',
      required: true,
    },
  ],
};