import ImageUrlBuilder from '@sanity/image-url';
import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: 'ax236o25',
  dataset: 'production',
  apiVersion: '2022-02-03',
  useCdn: true,
});

const builder = ImageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
