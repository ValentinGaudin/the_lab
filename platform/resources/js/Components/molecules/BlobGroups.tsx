import React from 'react';
import { BlobTwo, BlobOne } from '@/Components/atoms/icons';

const BlobGroups = () => {
	return (
		<>
			<div className="absolute top-[25%] right-[10%] pointer-events-none">
				<BlobOne className="w-20 h-20 md:w-64 md:h-64 blur-4xl" />
			</div>
			<div className="absolute top-[55%] left-44 pointer-events-none">
				<BlobTwo className="w-20 h-20 md:w-64 md:h-64 blur-4xl" />
			</div>
		</>
	);
};

export default BlobGroups;
