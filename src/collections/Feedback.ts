import type { CollectionConfig } from "payload";


export const Feedback: CollectionConfig = {
  slug: 'feedback',
  admin: {
    useAsTitle: 'id',
  },
       access : {
    create:({ req: { user } }:AccessArgs) => {
      return user?.role === 'admin' || user?.role === 'mentor' || user?.role === 'student';
    },
    read : ()=>true, // Allow all users to read tracks
    update :({ req: { user } }: AccessArgs) => {
      return user?.role === 'admin' || user?.role === 'mentor' || user?.role === 'student';
    },
    delete : ({ req: { user } }: AccessArgs) => {
      return user?.role === 'admin' || user?.role === 'mentor' || user?.role === 'student';
    },
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