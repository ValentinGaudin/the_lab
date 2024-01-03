import React, { useEffect, useState } from 'react';

type Props = {
	title: string;
};

const PageTitle = ({ title }: Props) => {
	const [animationStarted, setAnimationStarted] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setAnimationStarted(true);
		}, 150);
	}, []);

	return (
		<div
			className={`${
				animationStarted
					? 'opacity-100 translate-x-0'
					: '-translate-x-full opacity-0'
			} flex justify-start items-end w-10/12 mt-[150px] transition-all ease-out duration-500 border-b-4 border-solid border-black/80 dark:border-white/80 dark:border-fourth`}
		>
			<h1
				className={`font-title bg-gradient-to-r from-primary-dark via-secondary to-ternary animate-gradientMouvement bg-clip-text text-transparent text-3xl lg:text-5xl px-12 transition-all ease-in duration-500`}
			>
				{title}
			</h1>
		</div>
	);
};

export default PageTitle;
