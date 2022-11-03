export const skills = {
  name: 'skills',
  type: 'document',
  title: 'Skills',
  fields: [
    {
      name: 'skills',
      type: 'string',
      title: "Skills's name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Skill Image',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'link',
      type: 'url',
      title: 'Link to Homepage of the technology ',
      description:
        'Link to the Homepage or the doc of the technology/skill/package (Ex: https://nextjs.org)',
    },
    {
      name: 'category',
      type: 'string',
      title: 'Choose a category',
      options: {
        list: [
          { title: 'Front End', value: 'front end' },
          { title: 'Back End', value: 'back end' },
          { title: 'Others', value: 'others' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
  ],
  orderings: [
    {
      title: 'Category, New',
      name: 'category',
      by: [{ field: 'skills', direction: 'desc' }],
    },
  ],
};
