import React, { useMemo } from 'react';
import DOMPurify from 'dompurify';

import { BaseTemplate } from '@/Components/templates';

type Props = {
	inspiringQuote: string;
};

const Welcome = ({ inspiringQuote }: Props) => {
	const cleanQuote = useMemo(() => {
		return DOMPurify.sanitize(inspiringQuote, {
			USE_PROFILES: { html: true },
		});
	}, [inspiringQuote]);

	return (
		<BaseTemplate title={'Welcome'}>
			<div className="flex flex-col justify-center items-center w-screen h-[50vh]">
				<div className="w-2/4 xl:w-2/4 h-3/6 p-4 border border-solid border-black dark:border-white rounded-lg bg-pearl/30 dark:bg-dark-light/60 transition-colors duration-300 backdrop-blur">
					<div className="flex flex-col justify-center items-center w-full h-full">
						<h1 className="font-title uppercase text-3xl md:text-5xl lg:text-7xl xl:text-8xl bg-gradient-to-r from-primary-dark via-secondary to-ternary animate-gradientMouvementHorizontal bg-[length:300%_100%] duration-500 bg-clip-text text-transparent">
							Le labo
						</h1>
						{/*<p*/}
						{/*	className={`mt-2 dark:text-white text-black/80 font-regular text-sm lg:text-base text-center whitespace-pre-line transition-colors duration-300`}*/}
						{/*>*/}
						{/*	{cleanQuote}*/}
						{/*</p>*/}
					</div>
				</div>
			</div>
		</BaseTemplate>
	);
};

export default Welcome;
