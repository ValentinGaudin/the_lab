import React from 'react';
import { Category } from '@/types/Category';

type Props = {
	category: Category;
};

const MiniCategory = ({ category }: Props) => {
	return (
		<div className="rounded-full bg-gray-100 px-3 py-1 font-medium truncate w-fit">
			<p>{category.name}</p>
		</div>
	);
};

export default MiniCategory;
