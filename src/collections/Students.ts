import type { CollectionConfig } from "payload";

export const Students: CollectionConfig = {
  slug: 'students',
  admin: {
    useAsTitle: 'firstName',
  },
  fields: [
    {
      name: 'userId',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      unique: true,
    },
    {
      name: 'firstName',
      type: 'text',
      required: true,
    },
    {
      name: 'lastName',
      type: 'text',
      required: true,
    },
    {
      name: 'goal',
      type: 'text',
      required: true,
    },
    {
      name: 'bio',
      type: 'textarea',
      required: true,
    },
    {
      name: 'birthday',
      type: 'date',
      required: true,
    },
    {
      name: 'major',
      type: 'select',
      required: true,
      options: [
        { label: 'Software Engineering', value: 'Software_Engineering' },
        { label: 'Information Technology', value: 'Information_Technology' },
        { label: 'Computer Science', value: 'Computer_Science' },
        { label: 'Computer Engineering', value: 'Computer_Engineering' },
        { label: 'Other', value: 'other' },
      ],
    },
    {
      name: 'pronoun',
      type: 'select',
      required: true,
      options: [
        { label: 'She/Her', value: 'she_her' },
        { label: 'He/His', value: 'he_his' },
      ],
    },
    {
      name: 'profilePhoto',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'urlLinkedin',
      type: 'text',
    },
    {
      name: 'isAgree',
      type: 'checkbox',
    },
    {
      name: 'favouriteTracks',
      type: 'relationship',
      relationTo: 'favourite-tracks',
      hasMany: true,
    },
    {
      name: 'savedPosts',
      type: 'relationship',
      relationTo: 'saved-posts',
      hasMany: true,
    },
    {
      name: 'savedArticles',
      type: 'relationship',
      relationTo: 'saved-articles',
      hasMany: true,
    },
  ],
};


