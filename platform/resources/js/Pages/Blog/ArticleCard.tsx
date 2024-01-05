import React, { useEffect, useRef, useState } from 'react';

import { Post } from '@/types/Post';
import { BaseTemplate } from '@/Components/templates';
import { ArticleContent, MiniCategory } from '@/Components/atoms';
import { Head, Link } from '@inertiajs/react';
import useLocale from '@/hooks/useLocale';
import { Nullable } from '@/types/Common';

type Props = {
	article: Post;
};

const ArticleCard = ({ article }: Props) => {
	const { locale } = useLocale();

	const articleRef = useRef<Nullable<HTMLDivElement>>(null);

	const [articleHeight, setArticleHeight] = useState(0);
	const [windowHeight, setWindowHeight] = useState(window.innerHeight);
	const [scrollPosition, setScrollPosition] = useState(0);
	const [progression, setProgression] = useState(0);

	useEffect(() => {
		if (articleRef.current) {
			setArticleHeight(articleRef.current.scrollHeight);
		}
	}, []);

	useEffect(() => {
		const handleResize = () => {
			if (articleRef.current) {
				setArticleHeight(articleRef.current.scrollHeight);
				setWindowHeight(window.innerHeight);
			}
		};

		const handleScroll = () => {
			setScrollPosition(window.scrollY);
		};

		window.addEventListener('resize', handleResize);
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('resize', handleResize);
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	useEffect(() => {
		const trackLength = articleHeight - windowHeight;
		let newPercentage = Math.floor((scrollPosition / trackLength) * 100);

		if (newPercentage >= 100) {
			newPercentage = 100;
		}

		setProgression(newPercentage);
	}, [scrollPosition, articleHeight, windowHeight]);

	return (
		<>
			<Head title={article.title} />
			<div className={`z-10 fixed top-[92px] w-full h-1`}>
				<div
					className="bg-primary-dark dark:bg-secondary-light transition-all ease-in-out -skew-x-12 h-full"
					style={{
						width: `${progression}%`,
					}}
				/>
			</div>
			<article className="mx-auto min-h-screen w-screen flex text-primary-black my-32 px-20">
				<div
					ref={articleRef}
					className="container p-4 rounded-lg mx-auto bg-gradient-to-b from-gray-200/60 to-gray-50/80
				dark:from-gray-700/80 dark:to-gray-800/80 backdrop-blur"
				>
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
							<p className="text-xs text-secondary-dark dark:text-secondary-light">{article.read_time}</p>
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
		</>
	);
};

const Wrapper = ({ article }: Props) => {
	return (
		<BaseTemplate>
			<ArticleCard article={article} />
		</BaseTemplate>
	);
};

export default Wrapper;
