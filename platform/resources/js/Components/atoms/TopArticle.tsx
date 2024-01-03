import React, { useMemo } from 'react';
import { Link } from '@inertiajs/react';

import { ArticleContent, MiniCategory } from '@/Components/atoms';

import { Article } from '@/types/Article';
import useLocale from '@/hooks/useLocale';

type Props = {
	article: Article;
};

const TopArticle = ({ article }: Props) => {
	const { locale } = useLocale();

	const isNewPoste = useMemo(() => {
		const now = new Date();
		const createdAt = new Date(article.created_at);
		const diffInDays = Math.floor(
			(now.getTime() - createdAt.getTime()) / (1000 * 3600 * 24)
		);
		return diffInDays < 7;
	}, [article]);

	const clearBannerArticle = useMemo(() => {
		console.log(article.featured_banner);
		const removedSubstring = 'posts/banner/';
		return article.featured_banner.replace(removedSubstring, '');
	}, [article.featured_banner]);

	return (
		<article
			className="flex flex-col justify-between items-start mt-10 p-4 dark:border-white rounded-lg bg-gradient-to-b from-gray-200 to-gray-50
				dark:from-gray-700 dark:to-gray-800 backdrop-blur transition-colors duration-1000 ease-in"
		>
			<div className="h-full flex flex-col md:grid md:grid-cols-3 md:gap-x-8">
				{isNewPoste && (
					<span className="z-50 animate-ping duration-1000 absolute inline-flex h-4 w-4 rounded-full bg-primary-dark/80 dark:bg-ternary/80 opacity-75"></span>
				)}
				<Link
					className="md:col-span-2 md:h-full"
					href={route('blog.detail', [locale, article.slug])}
				>
					<img
						className="flex w-full h-[350px] object-cover aspect-video rounded-xl drop-shadow-2xl"
						src={route('internal.articles.banner', clearBannerArticle)}
						alt={`Image used for article ${article.title}`}
					/>
				</Link>
				<div className="grow flex flex-col items-stretch justify-between">
					<div className="md:flex md:flex-col space-y-4">
						<Link href={route('blog.detail', [locale, article.slug])}>
							<h3 className="mt-8 md:mt-4 text-lg md:text-2xl font-bold text-dark-blue dark:text-cold-steel">
								{article.title}
							</h3>
						</Link>
						<div className="mt-4 flex items-center space-x-1 text-xs text-dark-blue dark:text-cold-steel">
							<p className="text-xs text-primary-dark dark:text-secondary-light cursor-pointer font-base">
								{article.created_at}
							</p>
							<p className="text-xs cursor-pointer font-base dark:text-primary-dark text-secondary-light">
								• {article.read_time}
							</p>
						</div>
						{!!article.tags.length &&
							article.tags.map((tag, i) => (
								<MiniCategory category={tag} key={i} />
							))}
					</div>
					<p className="mt-8 text-sm leading-6 line-clamp-3 lg:line-clamp-6 text-dark-blue dark:text-cold-steel">
						<ArticleContent content={article.summary} />
					</p>
					<div className="mt-8 flex justify-end md:justify-start">
						<Link
							className="px-4 py-2 rounded-md text-xs border border-dark-blue dark:border-cold-steel text-dark-blue dark:text-cold-steel relative before:content-[''] before:absolute before:bg-gray-300/20 before:top-0 before:left-0 before:w-0 before:h-full before:transition-all before:duration-500 hover:before:w-[100%] "
							href={route('blog.detail', [locale, article.slug])}
						>
							<span className="w-full h-full">En savoir plus</span>
						</Link>
					</div>
				</div>
			</div>
		</article>
	);
};

export default TopArticle;
