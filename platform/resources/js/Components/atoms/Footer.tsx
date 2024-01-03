import React from 'react';
import { FooterWave } from '@/Components/atoms/icons';

const Footer = () => {
	const copyright = String.fromCodePoint(0x000a9);

	return (
		<footer className="relative mt-20 w-full mx-auto bottom-0">
			<FooterWave />
			<div className={`w-full flex justify-center items-center fixed bottom-0 mb-2`}>
				<p className="z-50 bg-gradient-to-r from-primary-light dark:from-primary-dark via-secondary-light dark:via-secondary-dark to-ternary-light dark:to-ternary-dark animate-gradientMouvementHorizontal bg-[length:300%_100%] duration-500 bg-clip-text text-transparent">
					{`Made with ❤️ and for ❤️ by ${copyright} Valentin Gaudin ${new Date(
						Date.now()
					).getFullYear()}`}
				</p>
			</div>
		</footer>
	);
};

export default Footer;
