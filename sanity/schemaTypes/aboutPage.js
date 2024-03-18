export default {
  name: 'aboutPage',
  type: 'document',
  title: 'About page',
  fields: [
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      title: 'About description',
      name: 'blockEditor',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
  ],
}
