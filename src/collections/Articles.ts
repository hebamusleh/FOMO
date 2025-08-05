import type { CollectionConfig } from "payload";

export const Articles: CollectionConfig = {
  slug: 'articles',
  admin: {
    useAsTitle: 'title',
  },
       access : {
    create:({ req: { user } }:AccessArgs) => {
      return user?.role === 'admin' || user?.role === 'mentor'
    },
    read : ()=>true, // Allow all users to read tracks
    update :({ req: { user } }: AccessArgs) => {
      return user?.role === 'admin' || user?.role === 'mentor';
    },
    delete : ({ req: { user } }: AccessArgs) => {
      return user?.role === 'admin' || user?.role === 'mentor';
    },
  },
  fields: [
    {
      name: 'mentorId',
      type: 'relationship',
      relationTo: 'mentors',
      required: true,
    },
    {
      name: 'trackId',
      type: 'relationship',
      relationTo: 'tracks',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'paragraphs',
      type: 'textarea',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'pending',
      options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Approved', value: 'approved' },
        { label: 'Rejected', value: 'rejected' },
      ],
    },
    {
      name: 'rejection_reason',
      type: 'textarea',
    },
    {
      name: 'views',
      type: 'number',
      defaultValue: 0,
    },
    {
      name: 'created_at',
      type: 'date',
      defaultValue: () => new Date(),
    },
    {
      name: 'savedArticles',
      type: 'relationship',
      relationTo: 'saved-articles',
      hasMany: true,
    },
  ],
};