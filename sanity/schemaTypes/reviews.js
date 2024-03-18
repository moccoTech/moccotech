export default {
  name: 'reviews',
  type: 'document',
  title: 'Reviews',
  fields: [
    {
      name: 'author',
      type: 'string',
      title: 'Author',
    },
    {
      name: 'review',
      type: 'string',
      title: 'Review',
    },
    {
      name: 'position',
      type: 'string',
      title: 'Author position',
    },
    {
      name: 'avatar',
      type: 'image',
      title: 'Author avatar',
    },
  ],
}
