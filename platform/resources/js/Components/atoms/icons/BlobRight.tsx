import React, { HTMLProps, SVGProps } from 'react';

const BlobRight = ({
	className,
}: Pick<HTMLProps<HTMLElement>, 'className'>) => {
	const blobSkewStyle = {
		animation: `blobSkew 3s linear infinite`,
		'--amount': 3,
	};
	return (
		<div className={`${className} animate-[blobTurn_40s_linear_infinite] origin-center`}>
			<svg
				style={blobSkewStyle}
				className={`origin-center`}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 747.2 726.7"
			>
				<defs>
					<linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
						<stop offset="0%" stopColor="#2400ff" stopOpacity={1} />
						<stop offset="100%" stopColor="#b794f4" stopOpacity={1} />
						{/*<stop offset="50%" stopColor="#ed64a6" stopOpacity={1} />*/}
					</linearGradient>
				</defs>
				<path
					fill="url(#grad1)"
					className={`animation-[blobScale_15s_ease-in-out_infinite] origin-center`}
					d="M539.8 137.6c98.3 69 183.5 124 203 198.4 19.3 74.4-27.1 168.2-93.8 245-66.8 76.8-153.8 136.6-254.2 144.9-100.6 8.2-214.7-35.1-292.7-122.5S-18.1 384.1 7.4 259.8C33 135.6 126.3 19 228.5 2.2c102.1-16.8 213.2 66.3 311.3 135.4z"
				/>
			</svg>
		</div>
	);
};

export default BlobRight;
