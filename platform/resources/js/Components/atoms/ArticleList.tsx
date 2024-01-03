import React, { useMemo, useState } from 'react';
import { Link } from '@inertiajs/react';

import { ArticleContent, MiniCategory } from '@/Components/atoms/index';

import { Article } from '@/types/Article';
import { Nullable } from '@/types/Common';
import useLocale from '@/hooks/useLocale';

type Props = {
	article: Article;
};

const ArticleList = ({ article }: Props) => {
	const { locale } = useLocale();
	const [currentCard, setCurrentCard] =
		useState<Nullable<{ article: Article }>>(null);

	// const clearPath = useMemo(() => {
	// 	const removedSubstring = 'articles/banner/';
	// 	return article.featured_image.replace(removedSubstring, '');
	// }, [article.featured_image]);

	return (
		<div
			data-w-id={article.id}
			role="listitem"
			className="
				col-span-3 lg:col-span-2
				px-2 py-3 mb-28
			  bg-opacity-50
				rounded
				shadow-lg group
				hover:shadow-2xl
				bg-gradient-to-b from-gray-200/80 to-gray-50/80
				dark:from-gray-700/80 dark:to-gray-800/80
				backdrop-blur
				transition-colors duration-1000 ease-in-out delay-1000
				cursor-pointer z-50"
			onMouseEnter={() => setCurrentCard({ article })}
			onMouseLeave={() => setCurrentCard(null)}
		>
			<Link
				href={route('blog.detail', [article.slug, locale])}
				className="z-10 cursor-pointer space-y-5"
			>
				<div className="flex flex-col justify-between h-20">
					<h2 className="mx-auto text-center text-base text-primary-dark dark:text-cold-steel">
						{article.title}
					</h2>
					<div className="mt-4 flex items-center space-x-1 text-xs text-dark-blue dark:text-cold-steel">
						<p className="text-xs text-secondary-dark dark:text-secondary-light cursor-pointer font-base">
							{article.created_at}
						</p>
						<p className="text-xs cursor-pointer font-base text-primary-dark dark:text-cold-steel">
							• {article.read_time} min de lecture
						</p>
					</div>
				</div>

				<div className="flex justify-center px-3">
					<img
						src={route('internal.articles.banner', article.featured_image)}
						alt={`Image used for article ${article.title}`}
						className={`z-50 w-full h-[220px] flex object-cover aspect-square transition-all duration-300 rounded-lg ${
							currentCard && currentCard.article !== article
								? 'grayscale'
								: 'grayscale-0'
						}`}
					/>
				</div>

				<div className="flex justify-start px-3 text-sm lg:text-base">
					{!!article.tags.length &&
						article.tags.map((tag, i) => (
							<MiniCategory category={tag} key={i} />
						))}
				</div>

				<div className="flex flex-wrap justify-start px-5 text-xs sm:justify-center ">
					<p className="mt-8 text-sm leading-6 line-clamp-3 lg:line-clamp-6 text-dark-blue dark:text-cold-steel">
						<ArticleContent content={article.summary} />
					</p>
				</div>
			</Link>
		</div>
	);
};

export default ArticleList;
