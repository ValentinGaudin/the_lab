import React, { PropsWithChildren } from 'react';

import { Header, LocaleProvider } from '@/Components/organisms';
import { BlobGroups } from '@/Components/molecules';
import { Footer } from '@/Components/atoms';
import { Head } from '@inertiajs/react';

const BaseTemplate = ({
	children,
	title,
}: PropsWithChildren & { title?: string }) => {
	return (
		<LocaleProvider>
			<Head title={title} />
			<div className="flex flex-col relative min-h-screen bg-white dark:bg-dark-blue">
				<BlobGroups />
				<Header title={title} />
				{children}
				<Footer />
			</div>
		</LocaleProvider>
	);
};

export default BaseTemplate;
