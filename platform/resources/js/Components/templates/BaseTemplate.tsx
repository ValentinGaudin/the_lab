import React, { PropsWithChildren } from 'react';

import { Header, LocaleProvider } from '@/Components/organisms';
import { BlobGroups } from '@/Components/molecules';
import { Footer } from '@/Components/atoms';

const BaseTemplate = ({ children }: PropsWithChildren) => {
	return (
		<LocaleProvider>
			<div className="flex flex-col font-sans bg-white dark:bg-dark-blue">
				<Header />
				<BlobGroups />
				{children}
				<Footer />
			</div>
		</LocaleProvider>
	);
};

export default BaseTemplate;
