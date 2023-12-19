import React from 'react';
import { MiniArticle, PageTitle } from '@/Components/atoms';
import { BaseTemplate } from '@/Components/templates';

import { Article } from '@/types/Article';

type Props = {
	articles: Article[];
};

const Experience = ({ articles }: Props) => {
	return (
		<BaseTemplate>
			<PageTitle title={'Expérience'} />
			<div className={`container mx-auto`}>
				<div
					className={`grid grid-cols-1 md:grid-cols-4 gap-y-12 md:gap-x-8 md:gap-y-20 my-8 md:my-16 lg:mx-8`}
				>
					{!!articles.length &&
						articles.map((article, i) => (
							<MiniArticle article={article} key={i} />
						))}
				</div>
			</div>
		</BaseTemplate>
	);
};

export default Experience;