import { z } from 'zod';

export const CategorySchema = z.object({
	id: z.number(),
	name: z.string(),
	deleted_at: z.date().nullable(),
	created_at: z.date(),
	updated_at: z.date(),
});

export type Category = z.infer<typeof CategorySchema>;
