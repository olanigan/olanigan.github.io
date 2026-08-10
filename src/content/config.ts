import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    summary: z.string(),
    methods: z.array(z.string()),
    github: z.string().url().optional(),
    huggingface: z.string().url().optional(),
    org: z.string().optional(),
    impact: z.string(),
    selected: z.boolean().default(false),
  }),
});

export const collections = { projects };
