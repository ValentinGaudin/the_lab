import type { Page, PageProps, Errors, ErrorBag } from '@inertiajs/core';

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
		[key: string]: any;
	}
}
