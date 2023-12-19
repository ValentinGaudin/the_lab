import React, { PropsWithChildren, useEffect } from 'react';

import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { Modales } from '@/Components/organisms';
import { useThemeStore } from '@/hooks';

const appName = import.meta.env.VITE_APP_NAME;

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
		<>
			<Modales>{children}</Modales>
		</>
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
