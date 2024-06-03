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

export const collections = {
  tool: toolCollection,
};
