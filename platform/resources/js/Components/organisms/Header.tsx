import React from 'react';

import { Navigation } from '@/Components/molecules';

const Header = () => {
	return (
		<header className="fixed z-50 top-0 h-24 w-full">
			<Navigation />
		</header>
	);
};

export default Header;
