import React, { PropsWithChildren } from 'react';

import { Header } from '@/Components/organisms';

const BaseTemplate = ({ children }: PropsWithChildren) => {
	return (
		<div className="">
			<Header />
			{children}
		</div>
	);
};

export default BaseTemplate;
