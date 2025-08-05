import type { CollectionConfig } from "payload";

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'post',
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
      name: 'postCategory',
      type: 'select',
      required: true,
      defaultValue: 'advice',
      options: [
        { label: 'Advice', value: 'advice' },
        { label: 'Book Recommendation', value: 'book_recommendation' },
        { label: 'Success Story', value: 'success_story' },
        { label: 'Mentor Journey', value: 'mentor_journey' },
        { label: 'Motivation', value: 'motivation' },
      ],
    },
    {
      name: 'post',
      type: 'textarea',
      required: true,
      maxLength: 1000,
    },
    {
      name: 'created_at',
      type: 'date',
      defaultValue: () => new Date(),
    },
    {
      name: 'savedPosts',
      type: 'relationship',
      relationTo: 'saved-posts',
      hasMany: true,
    },
  ],
};


