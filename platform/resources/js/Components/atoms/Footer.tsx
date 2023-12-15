import React from 'react';
import { FooterWave } from '@/Components/atoms/icons';

const Footer = () => {
	const copyright = String.fromCodePoint(0x000a9);

	return (
		<footer>
			<FooterWave />
			<div className={`w-full flex justify-center items-center invert`}>
				<p>
					{`Made with ❤️ and for ❤️ by ${copyright} Valentin Gaudin ${new Date(
						Date.now()
					).getFullYear()}`}
				</p>
			</div>
		</footer>
	);
};

export default Footer;