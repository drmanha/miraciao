import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'mjxdxhaz',
  dataset: 'production',
  apiVersion: '2022-03-10',
  useCdn: true,
  token: "sk62uAv7UnR31iBOEIsYMwf8Pp8vnMk4f9VeRcAourdZgYfmTwDp1DqaNM4Rz3pWs12EJHtFMSz899tezit7eS2vDz7LrWqYiN8TwgE7XXd1hnVztghnhuESi5Qvqd7BFVTudSnwKr1AcIix1ohDGvigDgwD5pvCs53lWo5NgtKyPCqnFQ8Y"
  // token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);