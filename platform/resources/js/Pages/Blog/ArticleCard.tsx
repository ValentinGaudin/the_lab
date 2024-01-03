import React from 'react';

import { Article } from '@/types/Article';
import { BaseTemplate } from '@/Components/templates';
import { ArticleContent, PageTitle } from '@/Components/atoms';
import { Link } from '@inertiajs/react';
import useLocale from '@/hooks/useLocale';

type Props = {
	article: Article;
};

const ArticleCard = ({ article }: Props) => {
	const { locale } = useLocale();
	return (
		<BaseTemplate>
			<PageTitle title={article.title} />
			<div className="mx-auto w-full min-h-screen max-w-screen-lg flex text-primary-black">
				<div className="m-8 sm:m-16">
					<Link
						className="m-8 flex items-center"
						href={route(`blog.index`, [locale])}
					>
						<p className="text-sm leading-6 truncate"> Back </p>
					</Link>

					<div className="mb-16 p-8 rounded-xl bg-primary-white">
						<div className="mb-16 flex items-stretch">
							<img
								className="w-24 object-cover rounded-xl"
								src="props.post.image"
							/>

							<h1 className="ml-4 py-2 w-2/3 text-5xl font-bold">
								{article.title}
							</h1>
						</div>

						<div className="mt-4 flex items-center">
							<p className="text-xs">{article.read_time}</p>
							<hr className="grow ml-4 border-solid" />
						</div>

						<div className="mt-8 text-2xl font-extralight tracking-wide article">
							<ArticleContent content={article.body} />
						</div>
					</div>
				</div>
			</div>
		</BaseTemplate>
	);
};

export default ArticleCard;
