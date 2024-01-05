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
			} flex justify-start items-center w-full mt-[150px] transition-all ease-out duration-500`}
		>
			<h1
				className={`font-bold bg-gradient-to-r from-primary-light dark:from-primary-dark via-secondary-light dark:via-secondary-dark to-ternary-light dark:to-ternary-dark animate-gradientMouvementHorizontal bg-[length:300%_100%] bg-clip-text text-transparent text-3xl lg:text-5xl capitalize px-12 transition-all ease-in duration-500`}
			>
				{title}
			</h1>
			<hr className="grow ms-4 border-solid border-2" />
		</div>
	);
};

export default PageTitle;
