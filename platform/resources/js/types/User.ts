import { z } from 'zod';
import { TagSchema } from '@/types/Tag';
import { TopicSchema } from '@/types/Topic';

export const UserSchema = z.object({
	name: z.string(),
	email: z.string(),
	username: z.string(),
	summary: z.string(),
	avatar: z.string(),
	default_avatar: z.string(),
	default_locale: z.string(),
	dark_mode: z.string(),
	digest: z.string(),
	locale: z.string(),
	role: z.string(),
	tags: z.array(TagSchema),
	topics: z.array(TopicSchema),
	is_editor: z.boolean(),
	is_contributor: z.boolean(),
	is_admin: z.boolean(),
});

export type User = z.infer<typeof UserSchema>;
