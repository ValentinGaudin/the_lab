import React, { PropsWithChildren } from 'react';

import { Header } from '@/Components/organisms';
import BlobGroups from '@/Components/molecules/BlobGroups';
import { Footer } from '@/Components/atoms';

const BaseTemplate = ({ children }: PropsWithChildren) => {
	return (
		<>
			<Header />
			<>
				<BlobGroups />
				{children}
			</>
			<Footer />
		</>
	);
};

export default BaseTemplate;
