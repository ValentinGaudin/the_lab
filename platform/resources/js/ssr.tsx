import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createInertiaApp } from '@inertiajs/react';
import createServer from '@inertiajs/react/server';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
// eslint-disable-next-line import/named
import route, { RouteName } from 'ziggy-js';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createServer((page) =>
	createInertiaApp({
		page,
		render: ReactDOMServer.renderToString,
		title: (title) => `${title} - ${appName}`,
		resolve: (name) =>
			resolvePageComponent(
				`./Pages/${name}.tsx`,
				import.meta.glob('./Pages/**/*.tsx')
			),
		setup: ({ App, props }) => {
			global.route<RouteName> = (name, params, absolute) =>
				route(name, params, absolute, {
					// @ts-expect-error - location is a URL
					...page.props.ziggy,
					// @ts-expect-error - location is a URL
					location: new URL(page.props.ziggy.location),
				});

			return <App {...props} />;
		},
	})
);
