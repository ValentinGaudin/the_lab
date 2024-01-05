import React, { useEffect, useState } from 'react';
import { Link } from '@inertiajs/react';

import { ArticleContent, MiniCategory, MiniTopic } from '@/Components/atoms';

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
			className="
				col-span-3 lg:col-span-2 h-full max-h-[500px] md:max-h-[575px] lg:max-h-[550px]
				px-5 py-3 mb-28 space-y-5
			  bg-opacity-50
				rounded
				shadow-lg group
				hover:shadow-2xl
				bg-gradient-to-b from-gray-200/80 to-gray-50/80
				dark:from-gray-700/80 dark:to-gray-800/80
				backdrop-blur overflow-y-scroll
				transition-colors duration-1000 ease-in-out delay-1000"
		>
			<Link
				href={route('blog.detail', [locale, article.slug])}
				className="z-10 cursor-pointer space-y-5 "
			>
				<div className="flex flex-col justify-between h-20 relative">
					<h2 className="mx-auto text-center text-base text-dark-blue dark:text-cold-steel">
						{article.title}
					</h2>
					<div className="mt-4 flex flex-wrap justify-between items-center space-y-1 text-xs text-dark-blue dark:text-cold-steel">
						<div className="flex space-x-1 text-xs text-dark-blue dark:text-cold-steel">
							<p className="text-xs text-primary-dark dark:text-secondary-light font-base transition-colors duration-500">
								{article.created_at}
							</p>
							<p className="text-xs cursor-pointer font-base text-dark-blue dark:text-cold-steel transition-colors duration-500">
								• {article.read_time}
							</p>
						</div>
						<div></div>
						{!!article.topic.length &&
							article.topic.map((topic, i) => (
								<MiniTopic topic={topic} key={i} />
							))}
					</div>
				</div>
			</Link>

			<div
				className={`justify-start text-sm lg:text-base flex absolute transition-all duration-700 mt-1 ${
					animationStarted ? 'opacity-100' : 'opacity-0'
				}`}
			>
				{!!article.tags.length &&
					article.tags.map((tag, i) => <MiniCategory category={tag} key={i} />)}
			</div>

			<Link
				href={route('blog.detail', [locale, article.slug])}
				className="flex justify-center transition-all duration-700 linear group-hover:translate-y-14"
			>
				<img
					src={`https://picsum.photos/200/300`}
					// src={article.featured_image}
					// alt={article.featured_image_caption}
					className={`z-50 w-full h-[220px] flex object-cover aspect-square rounded-lg mt-2 md:mt-0`}
				/>
			</Link>

			<Link
				href={route('blog.detail', [locale, article.slug])}
				className="flex flex-wrap justify-start px-5 text-xs sm:justify-center transition-all duration-700 linear  group-hover:translate-y-14"
			>
				<p className="mt-8 text-sm leading-6 line-clamp-3 lg:line-clamp-6 text-dark-blue dark:text-cold-steel">
					<ArticleContent content={article.summary} />
				</p>
			</Link>
		</div>
	);
};

export default ArticleList;
