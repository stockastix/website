import { z, defineCollection } from "astro:content";

const toolCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    heading: z.string(),
    component: z.string(),
    image: z.string(),
    weight: z.number(),
  }),
});

const docsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
  }),
});

const tutorialCollection = defineCollection({
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  tool: toolCollection,
  docs: docsCollection,
  tutorial: tutorialCollection,
};
