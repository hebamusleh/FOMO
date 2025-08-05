import type { CollectionConfig } from "payload";

export const Resources: CollectionConfig = {
  slug: 'resources',
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
    },
    {
      name: 'linkName',
      type: 'text',
    },
    {
      name: 'link',
      type: 'text',
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
      name: 'created_at',
      type: 'date',
      defaultValue: () => new Date(),
    },
  ],
};


