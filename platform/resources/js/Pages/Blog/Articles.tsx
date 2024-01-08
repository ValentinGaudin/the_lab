import React, { useMemo } from 'react';
import { BaseTemplate } from '@/Components/templates';
import { ArticleList, TopArticle } from '@/Components/atoms';

import { Post } from '@/types/Post';

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
		<BaseTemplate title={title}>
			{!!filteredArticles && (
				<div className="mx-auto container space-y-16 mb-32">
					<TopArticle article={filteredArticles.firstArticle} />
					<section role="list" className="mb-64">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-10 mx-4 md:mx-10">
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
