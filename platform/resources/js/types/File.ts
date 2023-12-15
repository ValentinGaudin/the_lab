import { z } from 'zod';
import { CategorySchema } from '@/types/Category';

export const FileSchema = z.object({
	id: z.number(),
	name: z.string(),
	path: z.string(),
	mime: z.array(CategorySchema),
	created_at: z.date(),
	updated_at: z.date(),
});

export type File = z.infer<typeof FileSchema>;
