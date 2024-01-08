import React, { useEffect, useState } from 'react';
import { Link } from '@inertiajs/react';

import { MiniCategory, MiniTopic } from '@/Components/atoms';

import { Post } from '@/types/Post';

import useLocale from '@/hooks/useLocale';

type Props = {
	article: Post;
};

const ArticleList = ({ article }: Props) => {
	const [mouseOnCard, setMouseOnCard] = useState(false);
	const [animationStarted, setAnimationStarted] = useState(false);
	const { locale } = useLocale();

	useEffect(() => {
		if (mouseOnCard) {
			setTimeout(() => {
				setAnimationStarted(true);
			}, 700);
		} else {
			setAnimationStarted(false);
		}
	}, [mouseOnCard]);

	return (
		<div
			data-w-id={article.id}
			role="listitem"
			onMouseEnter={() => setMouseOnCard(true)}
			onMouseLeave={() => setMouseOnCard(false)}
			className="col-span-1 px-2 py-2 rounded shadow-lg group hover:shadow-2xl bg-gradient-to-b from-gray-200/80 to-gray-50/50 dark:from-dark-blue/30 dark:to-dark/20 backdrop-blur overflow-y-scroll transition-all duration-500 ease-in-out"
		>
			<div className="flex flex-col justify-center transition-all duration-700 linear group-hover:-translate-y-14 container-banner">
				<img
					src={`https://picsum.photos/200/300`}
					// src={article.featured_image}
					// alt={article.featured_image_caption}
					className={`z-50 w-full flex object-cover aspect-[2/1] rounded-lg relative banner`}
				/>
				<div
					className={`group-hover:flex hidden justify-start text-sm lg:text-base transition-all duration-700 linear absolute group-hover:-bottom-14 ${
						animationStarted ? 'opacity-100 ' : 'opacity-0'
					}`}
				>
					{!!article.tags.length &&
						article.tags.map((tag, i) => (
							<MiniCategory category={tag} key={i} />
						))}
				</div>
			</div>

			<div className="flex flex-col justify-between h-1/2">
				<h2 className="text-center text-xl font-bold transition sm:text-2xl text-dark-blue dark:text-cold-steel group-hover:text-ternary-light mt-3">
					{article.title}
				</h2>
				<div className="mt-4 flex flex-wrap justify-between items-center justify-self-end text-xs text-dark-blue dark:text-cold-steel">
					<div className="flex items-center space-x-1 text-xs text-dark-blue dark:text-cold-steel">
						<p className="text-xs text-primary-dark dark:text-secondary-light font-base transition-colors duration-500">
							{article.created_at}
						</p>
						<p className="text-xs cursor-pointer font-base text-dark-blue dark:text-cold-steel transition-colors duration-500">
							• {article.read_time}
						</p>
					</div>
					<div>
						{!!article.topic.length &&
							article.topic.map((topic, i) => (
								<MiniTopic topic={topic} key={i} />
							))}
					</div>
				</div>
			</div>

			<Link
				href={route('blog.detail', [locale, article.slug])}
				className="inline-flex rounded-sm transition duration-300 leading-none focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600/80 absolute inset-0 !block h-full w-full !rounded-lg"
			>
				<span className="sr-only">Read article</span>
			</Link>
		</div>
	);
};

export default ArticleList;
