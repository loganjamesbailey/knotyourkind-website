import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const shows = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/shows' }),
  schema: z.object({
    date: z.coerce.date(),
    venue: z.string(),
    city: z.string(),
    state: z.string(),
    support: z.string().optional(),
    doors: z.string().optional(),
    showtime: z.string().optional(),
    ticketUrl: z.string().url().optional(),
    status: z.enum(['on-sale', 'few-left', 'sold-out', 'announced']).default('on-sale'),
  }),
});

export const collections = { shows };
