import { z } from 'zod';

export const TopicSchema = z.object({
	id: z.number(),
	slug: z.string(),
	name: z.string(),
	deleted_at: z.date().nullable(),
	created_at: z.date(),
	updated_at: z.date(),
});

export type Topic = z.infer<typeof TopicSchema>;
