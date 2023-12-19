import React, { useMemo } from 'react';
import { Head } from '@inertiajs/react';

import { BaseTemplate } from '@/Components/templates';

import DOMPurify from 'dompurify';
import { PageProps } from '@/types';

type Props = {
	auth: PageProps;
	inspiringQuote: string;
};

const Welcome = ({ auth, inspiringQuote }: Props) => {
	const cleanQuote = useMemo(() => {
		return DOMPurify.sanitize(inspiringQuote, {
			USE_PROFILES: { html: true },
		});
	}, [inspiringQuote]);

	return (
		<BaseTemplate>
			<Head title="Welcome" />

			<div className="flex flex-col justify-center items-center w-screen h-screen">
				<div className="w-2/4 xl:w-2/4 h-2/6 p-4 border border-solid border-black dark:border-white rounded-lg bg-pearl/60 dark:bg-dark-light/60 backdrop-blur">
					<div className="flex flex-col justify-center items-center w-full h-full">
						<h1 className="font-title uppercase text-3xl md:text-5xl lg:text-7xl xl:text-9xl bg-gradient-to-r from-primary via-secondary to-ternary animate-gradientMouvement duration-500 bg-clip-text text-transparent">
							Le labo
						</h1>
						<p
							className={`mt-2 dark:text-white text-dark/50 font-regular text-base text-center whitespace-pre-line`}
						>
							{cleanQuote}
						</p>
					</div>
				</div>
			</div>
		</BaseTemplate>
	);
};

export default Welcome;
