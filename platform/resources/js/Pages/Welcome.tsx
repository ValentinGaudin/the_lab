import React, { useEffect, useMemo } from 'react';
import { Head } from '@inertiajs/react';

import { BaseTemplate } from '@/Components/templates';
import { StartUpModal } from '@/Components/atoms';
import ApplicationLogo from '@/Components/atoms/ApplicationLogo';

import { useThemeStore, useModalStore } from '@/hooks';

import { PageProps } from '@/types';

import blackVideo from '@/../assets/video/video-home-black.mp4';
import lightVideo from '@/../assets/video/video-home-light.mp4';

type Props = {
	auth: PageProps;
	inspiringQuote: string;
};

const Welcome = ({ auth, inspiringQuote }: Props) => {
	const showModal = useModalStore((state) => state.showModal);
	const theme = useThemeStore((state) => state.theme);

	const homeVideo = useMemo(() => {
		if (theme === 'dark') {
			return blackVideo;
		} else {
			return lightVideo;
		}
	}, [theme]);

	// useEffect(() => {
	// 	showModal({
	// 		name: 'StartUp',
	// 		element: (
	// 			<StartUpModal
	// 				currentModal={'StartUp'}
	// 				inspiringQuote={inspiringQuote}
	// 			/>
	// 		),
	// 	});
	// }, []);

	return (
		<BaseTemplate>
			<Head title="Welcome" />
			<div
				className={`flex flex-col justify-center items-center w-screen h-screen p-10`}
			>
				<div className="w-2/4 xl:w-3/4 h-2/4 z-10 border border-solid border-black dark:border-white rounded-lg bg-white/80 dark:bg-dark-light/60 backdrop-blur">
					<div className="flex flex-col justify-center items-center w-full h-full">
						<h1 className="font-title uppercase text-3xl md:text-5xl lg:text-7xl xl:text-9xl text-ternary">
							Le labo
						</h1>
					</div>
				</div>
			</div>
		</BaseTemplate>
	);
};

export default Welcome;
