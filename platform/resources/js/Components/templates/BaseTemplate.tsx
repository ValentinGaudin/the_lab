import React, { PropsWithChildren } from 'react';

import { Header } from '@/Components/organisms';
import { BlobGroups } from '@/Components/molecules';
import { Footer, LinearBackGround, ToggleTheme } from '@/Components/atoms';

const BaseTemplate = ({ children }: PropsWithChildren) => {
	return (
		<div className="flex flex-col w-full min-h-screen font-sans bg-white dark:bg-dark-blue">
			<LinearBackGround />
			<Header />
			<BlobGroups />
			{children}
			<Footer />
			<ToggleTheme />
		</div>
	);
};

export default BaseTemplate;
