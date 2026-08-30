import { defineCollection } from "astro:content";
import { glob, file } from "astro/loaders";
import { z } from "astro/zod";

export const collections = {
	articles: defineCollection({
		loader: glob({ base: "./content/articles", pattern: "**/*.{md,mdx}" }),
		schema: z.object({
			title: z.string(),
			author: z.string(),
			draft: z.boolean(),
			category: z.enum([
				"Biology",
				"Chemistry",
				"Physics",
				"Environmental Science",
			]),
			publishedDate: z.date(),
		}),
	}),
	people: defineCollection({
		loader: glob({ base: "./content/people", pattern: "**/*.{md,mdx}" }),
		schema: z.object({
			name: z.string(),
			// Woke alert
			pronouns: z.string(),
			school: z.string(),
		}),
	}),
};
