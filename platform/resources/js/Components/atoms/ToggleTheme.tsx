import React from 'react';

import { useThemeStore } from '@/hooks';

const ToggleTheme = () => {
	const toggleTheme = useThemeStore((state) => state.toggleTheme);

	return (
		<div className="sticky">
			<label
				htmlFor="toggle-theme"
				className="inline-flex items-center p-1 cursor-pointer bg-gray-300 dark:text-gray-800 rounded-sm"
			>
				<input
					id="toggle-theme"
					type="checkbox"
					className="hidden peer"
					onClick={toggleTheme}
				/>
				<span className="px-4 py-2 bg-ternary-light peer-checked:dark:bg-gray-300 rounded-s-sm">
					OFF
				</span>
				<span className="px-4 py-2 bg-gray-300 peer-checked:dark:text-cold-steel peer-checked:dark:bg-primary-dark rounded-e-sm transition-colors duration-500 ease-in-out">
					ON
				</span>
			</label>
		</div>
	);
};

export default ToggleTheme;
