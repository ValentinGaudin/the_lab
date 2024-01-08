import type { Page, PageProps, Errors, ErrorBag } from '@inertiajs/core';
import { Tip } from '@/types/Tip';

export type User = {
	id: number;
	name: string;
	email: string;
	email_verified_at: string;
};

export type LocaleKey = 'fr' | 'en';

declare global {
	interface InertiaProps extends Page<PageProps> {
		errors: Errors & ErrorBag;
		auth: {
			user: User;
		};
		locale: LocaleKey;
		inspiringQuote: string;
		tip: Tip;
		[key: string]: any;
	}
}
