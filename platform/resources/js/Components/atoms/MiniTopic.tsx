import React, { HTMLProps } from 'react';
import { Link } from '@inertiajs/react';

import useLocale from '@/hooks/useLocale';

import { Topic } from '@/types/Topic';

type Props = {
	topic: Topic;
};

const MiniTopic = ({
	topic,
	className,
}: Props & Pick<HTMLProps<HTMLElement>, 'className'>) => {
	const { locale } = useLocale();
	return (
		<Link
			role="listitem"
			href={route('blog.topic.index', [locale, topic.slug])}
			className={`z-30 w-fit text-xs lg:text-base font-base capitalize text-dark-blue dark:text-cold-steel drop-shadow-md hover:underline cursor-pointer ${className}`}
		>
			<p>{topic.name}</p>
		</Link>
	);
};

export default MiniTopic;
