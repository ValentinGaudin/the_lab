import React, { HTMLProps } from 'react';
import { Tag } from '@/types/Tag';
import { Link } from '@inertiajs/react';
import useLocale from '@/hooks/useLocale';

type Props = {
	category: Tag;
};

const MiniCategory = ({
	category,
	className,
}: Props & Pick<HTMLProps<HTMLElement>, 'className'>) => {
	const { locale } = useLocale();
	return (
		<Link
			role="listitem"
			href={route('blog.tag.index', [locale, category.slug])}
			className={`z-30 rounded-full bg-cold-steel px-3 py-1 font-medium truncate w-fit capitalize drop-shadow-sm text-sm lg:text-base text-dark-blue transition-all duration-300 cursor-pointer ${className}`}
		>
			{category.name}
		</Link>
	);
};

export default MiniCategory;
