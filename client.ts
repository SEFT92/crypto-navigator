import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'hu2i1wct',
  dataset: 'production',
  useCdn: true, // Enabled for production-grade caching and performance
  apiVersion: '2023-05-03',
  ignoreBrowserTokenWarning: true
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}