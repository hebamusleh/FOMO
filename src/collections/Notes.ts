import type { CollectionConfig } from "payload";

export const Notes: CollectionConfig = {
  slug: 'notes',
  admin: {
    useAsTitle: 'note',
  },
  fields: [
    {
      name: 'sectionID',
      type: 'relationship',
      relationTo: 'sections' as any,
      required: true,
    },
    {
      name: 'mentorId',
      type: 'relationship',
      relationTo: 'mentors',
      required: true,
    },
    {
      name: 'note',
      type: 'textarea',
      required: true,
    },
    {
      name: 'created_at',
      type: 'date',
      defaultValue: () => new Date(),
    },
  ],
};