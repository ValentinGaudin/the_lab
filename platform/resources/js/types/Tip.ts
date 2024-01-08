import { z } from 'zod';

export const TipSchema = z.object({
	id: z.number(),
	title: z.string(),
	description: z.string(),
	link: z.string(),
	created_at: z.date(),
	updated_at: z.date(),
});

export type Tip = z.infer<typeof TipSchema>;
