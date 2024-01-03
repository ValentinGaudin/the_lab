import { z } from 'zod';
import { TopicSchema } from '@/types/Topic';
import { UserSchema } from '@/types/User';

export const ArticleSchema = z.object({
	id: z.number(),
	slug: z.string(),
	title: z.string(),
	summary: z.string(),
	body: z.string(),
	tags: z.array(TopicSchema),
	featured_banner: z.string(),
	featured_image: z.string(),
	featured_image_caption: z.string(),
	user: UserSchema,
	meta: UserSchema,
	read_time: z.number(),
	published_at: z.string(),
	created_at: z.string(),
	updated_at: z.date(),
	deleted_at: z.date().nullable(),
});

export type Article = z.infer<typeof ArticleSchema>;
