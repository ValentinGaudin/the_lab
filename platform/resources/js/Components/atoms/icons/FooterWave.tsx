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
				className={`animate-thirdWave repeat-infinite fill-ternary/80`}
				d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z"
			/>
			<path
				id="wave2"
				className={`animate-secondWave repeat-infinite fill-secondary/50`}
				d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z"
			/>
			<path
				id="wave"
				className={`animate-wave repeat-infinite fill-primary`}
				d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z"
			/>
			<g
				className="translate-x-12 transform rotate-x-180 hidden md:block"
				filter="url(#goo)"
			>
				<circle
					className="fill-primary animate-drop drop duration-1000"
					cx="20"
					cy="2"
					r="8.8"
				/>
				<circle
					className="fill-primary animate-drop  duration-700"
					cx="25"
					cy="2.5"
					r="7.5"
				/>
				<circle
					className="fill-primary animate-drop2 duration-1000"
					cx="16"
					cy="2.8"
					r="9.2"
				/>
				<circle
					className="fill-primary animate-drop3 duration-500"
					cx="18"
					cy="2"
					r="8.8"
				/>
				<circle
					className="fill-primary animate-drop4 duration-700"
					cx="22"
					cy="2.5"
					r="7.5"
				/>
				<circle
					className="fill-primary animate-drop5 duration-500"
					cx="26"
					cy="2.8"
					r="9.2"
				/>
				<circle
					className="fill-primary animate-drop6 duration-1000"
					cx="5"
					cy="4.4"
					r="8.8"
				/>
				<circle
					className="fill-primary animate-drop duration-500"
					cx="5"
					cy="4.1"
					r="7.5"
				/>
				<circle
					className="fill-primary animate-drop2 duration-700"
					cx="8"
					cy="3.8"
					r="9.2"
				/>
				<circle
					className="fill-primary animate-drop3 duration-500"
					cx="3"
					cy="4.4"
					r="8.8"
				/>
				<circle
					className="fill-primary animate-drop4 duration-700"
					cx="7"
					cy="4.1"
					r="7.5"
				/>
				<circle
					className="fill-primary animate-drop5 duration-500"
					cx="10"
					cy="4.3"
					r="9.2"
				/>
				<circle
					className="fill-primary animate-drop6 duration-1000"
					cx="1.2"
					cy="5.4"
					r="8.8"
				/>
				<circle
					className="fill-primary animate-drop duration-500"
					cx="5.2"
					cy="5.1"
					r="7.5"
				/>
				<circle
					className="fill-primary animate-drop2 duration-300"
					cx="10.2"
					cy="5.3"
					r="9.2"
				/>
				<circle
					className="fill-primary animate-drop3 duration-500"
					cx="3.2"
					cy="5.4"
					r="8.8"
				/>
				<circle
					className="fill-primary animate-drop4 duration-700"
					cx="14.2"
					cy="5.1"
					r="7.5"
				/>
				<circle
					className="fill-primary animate-drop5 duration-1000"
					cx="17.2"
					cy="4.8"
					r="9.2"
				/>
			</g>
		</svg>
	);
};

export default FooterWave;
