// lib/sanity.server.js
import createSanityClient from '@sanity/client';
import { config } from './config';

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createSanityClient(config);
