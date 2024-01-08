import React from 'react';
import { Link } from '@inertiajs/react';

import { BaseTemplate } from '@/Components/templates';
import { ArticleContent, MiniCategory } from '@/Components/atoms';

import { Post } from '@/types/Post';

import useLocale from '@/hooks/useLocale';

type Props = {
	article: Post;
};

const ArticleCard = ({ article }: Props) => {
	const { locale } = useLocale();

	return (
		<article className="mx-auto w-full flex text-primary-black my-32 px-20">
			<div className="container mx-auto p-4 rounded-lg  bg-gradient-to-b from-gray-200/60 to-gray-50/80 dark:from-dark-blue/65 dark:to-dark-light/30 backdrop-blur">
				<Link
					className="m-8 flex items-center"
					href={route(`blog.index`, [locale])}
				>
					<p className="text-sm leading-6 truncate group ">
						<span>{`<`} </span>
						<span className="group-hover:ms-2 transition-all duration-300">
							Back
						</span>
					</p>
				</Link>

				<div className="space-y-4">
					<div className="flex items-stretch">
						<img
							src={article.featured_image}
							alt={article.featured_image_caption}
							className={`w-full h-[220px] flex object-cover aspect-square transition-all duration-300 rounded-lg`}
						/>

						<h1 className="ml-4 py-2 w-2/3 text-5xl font-bold text-dark-blue dark:text-cold-steel">
							{article.title}
						</h1>
					</div>

					<div className="flex items-center space-x-2">
						<img
							className="h-8 w-8 object-cover rounded-full dark-image-mode"
							// src={article.user.default_avatar ?? ''}
							alt="Avatar de l'auteur"
						/>
						<div className="flex flex-col">
							<p>{/*{article.user.username} • {article.user.summary}*/}</p>
						</div>
					</div>

					<div className="mt-4 flex items-center">
						<p className="text-xs text-secondary-dark dark:text-secondary-light">
							{article.read_time}
						</p>
						<hr className="grow mx-4 border-solid" />
						{!!article.tags.length &&
							article.tags.map((tag, i) => (
								<MiniCategory
									category={tag}
									className={`px-1 text-xs`}
									key={i}
								/>
							))}
					</div>

					<div className="mt-8 text-2xl font-extralight tracking-wide article">
						<ArticleContent content={article.body} />
					</div>
				</div>
			</div>
		</article>
	);
};

const Wrapper = ({ article }: Props) => {
	return (
		<BaseTemplate title={article.title}>
			<ArticleCard article={article} />
		</BaseTemplate>
	);
};

export default Wrapper;
