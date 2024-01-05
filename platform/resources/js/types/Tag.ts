import { z } from 'zod';

export const TagSchema = z.object({
	id: z.number(),
	slug: z.string(),
	name: z.string(),
	deleted_at: z.date().nullable(),
	created_at: z.date(),
	updated_at: z.date(),
});

export type Tag = z.infer<typeof TagSchema>;
