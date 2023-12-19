import React from 'react';

const FooterWave = () => {
	return (
		<svg className={`w-full overflow-visible`} viewBox="0 0 120 18">
			<defs>
				<filter id="goo">
					<feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur" />
					<feColorMatrix
						in="blur"
						mode="matrix"
						values="
	           1 10 0 0 0
	           0 1 0 0 0
	           0 0 1 0 0
	           0 0 0 13 -9"
						result="goo"
					/>
				</filter>
			</defs>

			<path
				id="wave3"
				className={`animate-thirdWave repeat-infinite blur-sm fill-ternary/80`}
				d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z"
			/>
			<path
				id="wave2"
				className={`animate-secondWave repeat-infinite blur-sm fill-secondary/50`}
				d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z"
			/>
			<path
				id="wave"
				className={`animate-wave repeat-infinite blur-sm fill-primary`}
				d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z"
			/>
		</svg>
	);
};

export default FooterWave;
