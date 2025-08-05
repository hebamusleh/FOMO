import type { CollectionConfig } from "payload";

export const Tracks: CollectionConfig = {
  slug: 'tracks',
  admin: {
    useAsTitle: 'trackName',
  },
  access : {
    create:({ req: { user } }:AccessArgs) => {
      return user?.role === 'admin' || user?.role === 'mentor'
    },
    read : ()=>true, // Allow all users to read tracks
    update :({ req: { user } }: AccessArgs) => {
      return user?.role === 'admin';
    },
    delete : ({ req: { user } }: AccessArgs) => {
      return user?.role === 'admin';
    },
  },
  fields: [
    {
      name: 'trackName',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'categoryId',
      type: 'relationship',
      relationTo: 'track-categories',
      required: true,
    },
    {
      name: 'trackDescription',
      type: 'textarea',
    },
    {
      name: 'trackImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'roadmapLink',
      type: 'text',
    },
    {
      name: 'favouriteTracks',
      type: 'relationship',
      relationTo: 'favourite-tracks',
      hasMany: true,
    },
    {
      name: 'articles',
      type: 'relationship',
      relationTo: 'articles',
      hasMany: true,
    },
    {
      name: 'resources',
      type: 'relationship',
      relationTo: 'resources',
      hasMany: true,
    },
    {
      name: 'mentors',
      type: 'relationship',
      relationTo: 'mentors',
      hasMany: true,
    },
  ],
};


