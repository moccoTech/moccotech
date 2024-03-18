export default {
  name: 'services',
  type: 'document',
  title: 'Services',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Service title',
    },
    {
      name: 'shortDescription',
      type: 'string',
      title: 'Service short description',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Service description',
    },
    {
      name: 'icon',
      type: 'image',
      title: 'Service icon',
    },
    {
      name: 'id',
      type: 'string',
      title: 'Service id *required for correct work of css',
    },
  ],
}
