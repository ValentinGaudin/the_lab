import React, { HTMLProps } from 'react';
import { Topic } from '@/types/Topic';

type Props = {
	category: Topic;
};

const MiniCategory = ({
	category,
	className,
}: Props & Pick<HTMLProps<HTMLElement>, 'className'>) => {
	return (
		<div
			role="listitem"
			className={`rounded-full bg-gray-100 px-3 py-1 font-medium truncate w-fit capitalize drop-shadow-md ${className}`}
		>
			<p>{category.name}</p>
		</div>
	);
};

export default MiniCategory;
