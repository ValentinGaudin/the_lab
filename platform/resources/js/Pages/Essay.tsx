import React from 'react';
import { BaseTemplate } from '@/Components/templates';

const Essay = () => {
	return (
		<BaseTemplate>
			<div
				className={`flex flex-col justify-center items-center w-screen h-screen`}
			>
				<h1 className="text-ternary">Essaie</h1>
			</div>
		</BaseTemplate>
	);
};

export default Essay;
