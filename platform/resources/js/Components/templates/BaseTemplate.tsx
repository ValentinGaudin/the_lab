import React, { PropsWithChildren } from 'react';

import { Header } from '@/Components/organisms';

const BaseTemplate = ({ children }: PropsWithChildren) => {
	return (
		<>
			<div className="min-h-screen min-w-full bg-ivory dark:bg-dark selection:bg-red-500 selection:text-white">
				<Header />
				<>{children}</>
			</div>
		</>
	);
};

export default BaseTemplate;
