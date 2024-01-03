import React from 'react';

const LinearBackGround = () => {
	return (
		<div className="absolute w-screen min-h-screen h-dvh pointer-events-none">
			<span className="w-screen h-[2em] blur-2xl bg-gradient-to-b from-ternary from-10% via-secondary via-30% to-primary-dark to-60% fixed top-0 left-0 rounded-b-lg" />
		</div>
	);
};

export default LinearBackGround;
