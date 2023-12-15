import React from 'react';
import { BlobLeft, BlobMiddle, BlobRight } from '@/Components/atoms/icons';

const BlobGroups = () => {

	return (
		<div className="absolute h-screen w-screen">
			<BlobLeft className="sticky top-36 w-20 h-20 md:w-64 md:h-64" />
			<BlobMiddle className="sticky top-80 w-20 h-20 md:w-64 md:h-64" />
			<BlobRight className="sticky top-56 w-20 h-20 md:w-64 md:h-64" />
		</div>
	);
};

export default BlobGroups;
