import React, { useMemo } from 'react';
import { BaseTemplate } from '@/Components/templates';
import { ArticleList, PageTitle, TopArticle } from '@/Components/atoms';

import { Article } from '@/types/Article';

type Props = {
	title: string;
	articles: Article[];
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
			<PageTitle title={title} />
			{!!filteredArticles && (
				<div className="container mx-auto space-y-16">
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
