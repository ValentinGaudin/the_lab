import React from 'react';

import { ToggleTheme } from '@/Components/atoms';
import { Navigation } from '@/Components/molecules';

const Header = () => {
	return (
		<>
			<header className="fixed top-0 h-24 w-full">
				<Navigation />
			</header>
			<ToggleTheme />
		</>

	);
};

export default Header;
