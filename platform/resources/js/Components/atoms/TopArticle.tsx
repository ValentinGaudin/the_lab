import React, { useMemo } from 'react';
import { Link } from '@inertiajs/react';

import { ArticleContent, MiniCategory, MiniTopic } from '@/Components/atoms';

import { Post } from '@/types/Post';
import useLocale from '@/hooks/useLocale';

type Props = {
	article: Post;
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

	return (
		<article className="flex flex-col justify-between items-start group mt-10 p-4 dark:border-white rounded-lg bg-gradient-to-br from-gray-200/90 to-gray-50/50 dark:from-dark-blue/80 dark:to-dark/50 backdrop-blur transition-all duration-300 ease-in shadow-sm hover:shadow-2xl hover:translate-y-1">
			<div className="h-full w-full flex flex-col md:grid md:grid-cols-2 md:gap-x-8">
				{isNewPoste && (
					<span className="z-50 animate-ping duration-1000 absolute inline-flex h-4 w-4 rounded-full bg-primary-dark/80 dark:bg-ternary/80 opacity-75"></span>
				)}
				<Link
					className="h-full w-full md:col-span-1"
					href={route('blog.detail', [locale, article.slug])}
				>
					<img
						className="h-[350px] object-cover aspect-video rounded-xl drop-shadow-2xl "
						// src={article.featured_image}
						src={`https://picsum.photos/200/300`}
						alt={article.featured_image_caption}
					/>
				</Link>
				<div className="grow flex flex-col items-stretch justify-between md:col-span-1">
					<div className="md:flex md:flex-col space-y-4">
						<Link href={route('blog.detail', [locale, article.slug])}>
							<h3 className="mt-8 md:mt-4 text-lg md:text-2xl font-bold text-dark-blue dark:text-cold-steel transition-colors duration-500">
								{article.title}
							</h3>
						</Link>
						<div className="mt-4 flex justify-between items-center">
							<div className="flex text-xs text-dark-blue space-x-1 dark:text-cold-steel">
								<p className="text-xs text-primary-dark dark:text-secondary-light font-base transition-colors duration-500">
									{article.created_at}
								</p>
								<p className="text-xs font-base text-dark-blue dark:text-cold-steel transition-colors duration-500">
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

						<div className="space-x-1">
							{!!article.tags.length &&
								article.tags.map((tag, i) => (
									<MiniCategory category={tag} key={i} />
								))}
						</div>
					</div>
					<Link href={route('blog.detail', [locale, article.slug])}>
						<p className="mt-8 text-sm leading-6 line-clamp-3 lg:line-clamp-6 text-dark-blue dark:text-cold-steel transition-colors duration-500">
							<ArticleContent content={article.summary} />
						</p>
					</Link>

					<div className="mt-8 flex justify-end">
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
