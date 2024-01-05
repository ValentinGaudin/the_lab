import React from 'react';

import { useThemeStore } from '@/hooks';

const ToggleTheme = () => {
	const toggleTheme = useThemeStore((state) => state.toggleTheme);
	const theme = useThemeStore((state) => state.theme);

	return (
		<div className="sticky">
			<label
				htmlFor="toggle-theme"
				className="inline-flex items-center p-1 cursor-pointer bg-gray-300 dark:text-gray-800 rounded-full shadow-md drop-shadow-md dark:shadow-lg shadow-secondary-light dark:shadow-primary-light"
			>
				<div className="relative">
					<input
						type="checkbox"
						id={'toggle-theme'}
						className="peer sr-only"
						checked={theme === 'dark'}
						onChange={toggleTheme}
					/>
					<div className="block bg-secondary-light dark:bg-primary-light shadow-sm w-7 md:w-12 h-[1.1rem] md:h-7 rounded-full cursor-pointer"></div>
					<div className="peer-checked:translate-x-full bg-white absolute left-1 top-1 w-2.5 md:w-5 h-2.5 md:h-5 rounded-full transition-all duration-500 delay-100">
						<span className="flex justify-center items-center w-full h-full">
							{theme !== 'dark' ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-4 h-4"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
									/>
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-4 h-4"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
									/>
								</svg>
							)}
						</span>
					</div>
				</div>
				{/*<span className="px-2 py-1 bg-gray-300 peer-checked:dark:text-cold-steel peer-checked:dark:bg-primary-dark rounded-e-full transition-colors duration-500 ease-in-out">*/}

				{/*</span>*/}
			</label>
		</div>
	);
};

export default ToggleTheme;
