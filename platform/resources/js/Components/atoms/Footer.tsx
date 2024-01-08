import React from 'react';
import { FooterWave } from '@/Components/atoms/icons';

const Footer = () => {
	const copyright = String.fromCodePoint(0x000a9);

	return (
		<footer className="absolute bottom-0 w-full">
			<FooterWave />

			<div
				className={`absolute bottom-0 w-full flex justify-center items-center mb-2`}
			>
				<p className="z-50 text-xs md:text-sm lg:text-base bg-gradient-to-r from-primary-light dark:from-primary-dark via-secondary-light dark:via-secondary-dark to-ternary-light dark:to-ternary-dark animate-gradientMouvementHorizontal bg-[length:400%_100%] duration-500 bg-clip-text text-transparent">
					{`Made with ❤️ and for ❤️ by ${copyright} Valentin Gaudin ${new Date(
						Date.now()
					).getFullYear()}`}
				</p>
			</div>
		</footer>
	);
};

export default Footer;
