import { z } from 'zod';
import { TagSchema } from '@/types/Tag';
import { UserSchema } from '@/types/User';
import { TopicSchema } from '@/types/Topic';

export const PostSchema = z.object({
	id: z.number(),
	slug: z.string(),
	title: z.string(),
	summary: z.string(),
	body: z.string(),
	tags: z.array(TagSchema),
	topic: z.array(TopicSchema),
	featured_image: z.string(),
	featured_image_caption: z.string(),
	user: UserSchema,
	meta: z.object({
		title: z.string(),
		description: z.string(),
		canonical_link: z.string(),
	}),
	read_time: z.number(),
	published_at: z.string(),
	created_at: z.string(),
	updated_at: z.date(),
	deleted_at: z.date().nullable(),
});

export type Post = z.infer<typeof PostSchema>;
