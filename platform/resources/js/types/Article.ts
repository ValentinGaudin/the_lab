import { z } from 'zod';
import { CategorySchema } from '@/types/Category';
import { FileSchema } from '@/types/File';

export const ArticleSchema = z.object({
	id: z.number(),
	title: z.string(),
	content: z.string(),
	slug: z.string(),
	categories: z.array(CategorySchema),
	files: z.array(FileSchema).nullable(),
	reading_time: z.number(),
	deleted_at: z.date().nullable(),
	created_at: z.string(),
	updated_at: z.date(),
});

export type Article = z.infer<typeof ArticleSchema>;
