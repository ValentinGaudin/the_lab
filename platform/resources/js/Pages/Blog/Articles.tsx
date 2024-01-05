import React, { useMemo } from 'react';
import { BaseTemplate } from '@/Components/templates';
import { ArticleList, PageTitle, TopArticle } from '@/Components/atoms';

import { Post } from '@/types/Post';
import { Head } from '@inertiajs/react';

type Props = {
	title: string;
	articles: Post[];
};

const Articles = ({ title, articles }: Props) => {
	const filteredArticles = useMemo(() => {
		if (!articles.length) {
			return null;
		}

		const firstArticle = articles[0];

		const restOfArticles = articles.slice(1);

		return {
			firstArticle,
			restOfArticles,
		};
	}, [articles]);

	return (
		<BaseTemplate>
			<Head title="Blog" />
			<PageTitle title={title} />
			{!!filteredArticles && (
				<div className="container mx-auto p-2 space-y-16 mb-32">
					<TopArticle article={filteredArticles.firstArticle} />
					<section role="list" className="mb-64">
						<div className="grid grid-cols-6 gap-5">
							{!!filteredArticles.restOfArticles.length &&
								filteredArticles.restOfArticles.map((article, i) => (
									<ArticleList article={article} key={i} />
								))}
						</div>
					</section>
				</div>
			)}
		</BaseTemplate>
	);
};

export default Articles;
