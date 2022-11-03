import { createClient } from 'next-sanity';

//* Config the sanity client to connect to sanity
export const config = {
  clientConfig: {
    dataset: process.env.NEXT_PUBLIC_DATA_SET || 'production',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: '2021-03-05',
    useCdn: process.env.NODE_ENV === 'production',
  },
};

export const sanityClient = createClient(config.clientConfig);
