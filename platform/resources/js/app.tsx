import React, { PropsWithChildren, useEffect } from 'react';

import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { Modales } from '@/Components/organisms';
import { useThemeStore } from '@/hooks';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

const Wrapper = ({ children }: PropsWithChildren) => {
	const theme = useThemeStore((state) => state.theme);

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, []);

	return (
		<div
			className={`flex z-10 min-h-screen min-w-screen bg-white dark:bg-dark selection:text-white selection:bg-marble/70`}
		>
			<Modales>{children}</Modales>
		</div>
	);
};

void createInertiaApp({
	title: (title) => `${title} - ${appName}`,
	resolve: (name) =>
		resolvePageComponent(
			`./Pages/${name}.tsx`,
			import.meta.glob('./Pages/**/*.tsx')
		),
	setup({ el, App, props }) {
		const root = createRoot(el);

		root.render(
			<Wrapper>
				<App {...props} />
			</Wrapper>
		);
	},
	progress: {
		color: '#4B5563',
	},
});
