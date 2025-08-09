import type { CollectionConfig } from "payload";

export const FavouriteTracks: CollectionConfig = {
  slug: 'favourite-tracks',
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
      name: 'idTrack',
      type: 'relationship',
      relationTo: 'tracks',
      required: true,
    },
  ],
};