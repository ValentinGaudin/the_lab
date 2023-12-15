import React, { useEffect, useMemo } from 'react';
import { Link } from '@inertiajs/react';
import DOMPurify from 'dompurify';

import { MiniCategory } from '@/Components/atoms';

import { Article } from '@/types/Article';

type Props = {
	article: Article;
};

const MiniArticle = ({ article }: Props) => {
	const cleanContent = DOMPurify.sanitize(article.content, {
		USE_PROFILES: { html: true },
	});

	const isNewPoste = useMemo(() => {
		const now = new Date();
		const createdAt = new Date(article.created_at);
		const diffInDays = Math.floor(
			(now.getTime() - createdAt.getTime()) / (1000 * 3600 * 24)
		);
		return diffInDays < 7;
	}, [article]);

	return (
		<article className="z-10 flex flex-col justify-between items-start p-4 col-span-2 md:first:col-span-4 rounded-xl bg-white/50 backdrop-blur">
			<div className="h-full flex flex-col md:grid md:grid-cols-3 md:gap-x-8">
				{isNewPoste && (
					<span className="animate-ping absolute right-0 inline-flex h-4 w-4 rounded-full bg-primary/80 dark:bg-ternary/80 opacity-75"></span>
				)}
				<Link
					className="md:col-span-2 md:h-full"
					href={route('essay.detail', article.slug)}
				>
					<img
						className="w-full aspect-video object-cover rounded-xl md:h-full"
						src="https://source.unsplash.com/random/480x360"
						alt={`Image used for article ${article.title}`}
					/>
				</Link>
				<div className="grow flex flex-col items-stretch justify-between">
					<div className="md:flex md:flex-col space-y-4">
						<Link href={route('essay.detail', article.slug)}>
							<h3 className="mt-8 md:mt-4 text-lg font-bold md:text-2xl">
								{article.title}
							</h3>
						</Link>
						<div className="mt-4 flex items-center space-x-4 text-xs">
							<p className="py-1">{article.created_at}</p>
							<p className="py-1">{article.reading_time} min de lecture</p>
						</div>
						{!!article.categories.length &&
							article.categories.map((category, i) => (
								<MiniCategory category={category} key={i} />
							))}
					</div>
					<div className="mt-8 text-sm leading-6 line-clamp-3 lg:line-clamp-6">
						<p>{cleanContent}</p>
					</div>
					<div className="mt-8 flex justify-end md:justify-start">
						<Link
							className="px-4 py-2 rounded-md text-xs border"
							href={route('essay.detail', article.slug)}
						>
							<span>En savoir plus</span>
						</Link>
					</div>
				</div>
			</div>
		</article>
	);
};

export default MiniArticle;
