import React, { useEffect } from 'react';

import { Head } from '@inertiajs/react';

import { BaseTemplate } from '@/Components/templates';
import { StartUpModal } from '@/Components/atoms';

import useModalStore from '@/hooks/useModalStore';

import { PageProps } from '@/types';

import ApplicationLogo from '@/Components/atoms/ApplicationLogo';

type Props = {
	auth: PageProps;
	inspiringQuote: string;
};

const Welcome = ({ auth, inspiringQuote }: Props) => {
	const showModal = useModalStore((state) => state.showModal);

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
		<>
			<Head title="Welcome" />
			<BaseTemplate>
				<div
					className={`flex flex-col justify-center items-center w-screen h-screen`}
				>
					<ApplicationLogo className="p-2" />
					<h1 className="text-ternary">Le labo</h1>
				</div>
			</BaseTemplate>
		</>
	);
};

export default Welcome;
