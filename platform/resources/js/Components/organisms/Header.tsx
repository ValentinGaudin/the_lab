import React from 'react';

import { Navigation } from '@/Components/molecules';

const Header = () => {
	return (
		<header className="fixed top-0 h-24 w-full z-50">
			<Navigation />
		</header>
	);
};

export default Header;
