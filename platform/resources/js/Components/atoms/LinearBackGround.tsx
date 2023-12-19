import React from 'react';

const LinearBackGround = () => {
	return (
		<div className="w-full h-full absolute top-0 mt-auto pt-0 inset-0 overflow-x-hidden overflow-y-visible">
			<span
				className="w-[83em] h-[46em] blur-2xl bg-[#ff9831] bg-[linear-gradient(152deg,#ff9831,#2400ff,#fe330a_43%)] absolute -top-96 -left-80 -rotate-12 rounded-full"
				style={{
					transformStyle: 'preserve-3d',
					willChange: 'transform',
				}}
			/>
			<span
				className="w-[93em] h-[46em] blur-2xl bg-[#ff9831] bg-[linear-gradient(17deg,#fe330a_45%,#ff9831)] absolute -top-32 -right-[34rem] -rotate-45 animate-linearGradientRight rounded-full"
				style={{
					transformStyle: 'preserve-3d',
					willChange: 'transform',
				}}
			/>
		</div>
	);
};

export default LinearBackGround;
