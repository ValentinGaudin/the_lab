import React, { useEffect } from 'react';

import { Head } from '@inertiajs/react';

import { BaseTemplate } from '@/Components/templates';
import { StartUpModal } from '@/Components/atoms';

import useModalStore from '@/hooks/useModalStore';

import { PageProps } from '@/types';

type Props = {
	auth: PageProps;
	inspiringQuote: string;
};

const Welcome = ({ auth, inspiringQuote }: Props) => {
	const showModal = useModalStore((state) => state.showModal);

	useEffect(() => {
		showModal({
			name: 'StartUp',
			element: (
				<StartUpModal
					currentModal={'StartUp'}
					inspiringQuote={inspiringQuote}
				/>
			),
		});
	}, []);

	return (
		<>
			<Head title="Welcome" />
			<BaseTemplate></BaseTemplate>
		</>
	);
};

export default Welcome;
