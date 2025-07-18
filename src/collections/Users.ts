// REVIEWED
import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
   slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name: 'email',
      type: 'email',
      required: true,
      unique: true,
    },
    {
      name: 'password',
      type: 'text',
      required: true,
      hidden: true,
    },
    {
      name: 'role',
      type: 'select',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' },
        { label: 'Mentor', value: 'mentor' },
        { label: 'Student', value: 'student' },
      ],
      defaultValue: 'user',
    },
    {
      name: 'postCategory',
      type: 'select',
      options: [
        { label: 'Advice', value: 'advice' },
        { label: 'Book Recommendation', value: 'book_recommendation' },
        { label: 'Success Story', value: 'success_story' },
        { label: 'Mentor Journey', value: 'mentor_journey' },
        { label: 'Motivation', value: 'motivation' },
      ],
      hasMany: true,
    },
    {
      name: 'createdAt',
      type: 'date',
      defaultValue: () => new Date(),
    },
    {
      name: 'student',
      type: 'relationship',
      relationTo: 'students',
      hasMany: false,
    },
    {
      name: 'mentor',
      type: 'relationship',
      relationTo: 'mentors',
      hasMany: false,
    },
    {
      name: 'feedback',
      type: 'relationship',
      relationTo: 'feedback',
      hasMany: true,
    },
    {
      name: 'sections',
      type: 'relationship',
      relationTo: 'sections',
      hasMany: true,
    },
  ],
};