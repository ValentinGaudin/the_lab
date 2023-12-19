import React, { useState } from 'react';

import {
	ApplicationLogo,
	ResponsiveNavLink,
	NavLink,
} from '@/Components/atoms';

const Navigation = () => {
	const [showingNavigationDropdown, setShowingNavigationDropdown] =
		useState(false);

	return (
		<nav className="border-b border-solid border-black/50 dark:border-white/50 dark:bg-black/25 bg-white/25">
			<div
				className="
				flex justify-between items-center
				sm:-my-px relative px-14 py-4
				before:absolute before:content-[''] before:bottom-[0.5px] before:left-0 before:w-full before:h-[calc(100%+10px)] before:backdrop-blur before:-z-10
				backdrop-blur"
			>
				<NavLink href={route('welcome')} active={route().current('welcome')}>
					<ApplicationLogo className="w-14 h-14 fill-current" />
				</NavLink>

				<div className="items-center sm:hidden">
					<button
						onClick={() =>
							setShowingNavigationDropdown((previousState) => !previousState)
						}
						className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out"
					>
						<svg
							className="h-6 w-6"
							stroke="currentColor"
							fill="none"
							viewBox="0 0 24 24"
						>
							<path
								className={
									!showingNavigationDropdown ? 'inline-flex' : 'hidden'
								}
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
							<path
								className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>

				<div className="hidden sm:flex mr-10 space-x-8">
					{/*{auth && (*/}
					{/*	<NavLink*/}
					{/*		href={route('dashboard')}*/}
					{/*		active={route().current('dashboard')}*/}
					{/*	>*/}
					{/*		Dashboard*/}
					{/*	</NavLink>*/}
					{/*)}*/}
					<NavLink
						href={route('essay.index')}
						active={route().current('essay.index')}
					>
						Essai
					</NavLink>
					<NavLink
						href={route('experience.index')}
						active={route().current('experience.index')}
					>
						Expérience
					</NavLink>
				</div>

				<div
					className={`${
						showingNavigationDropdown ? 'block' : 'hidden'
					}  absolute top-[54px] right-0`}
				>
					<div className="pt-2 pb-3 space-y-1">
						<ResponsiveNavLink
							href={route('welcome')}
							active={route().current('welcome')}
						>
							Dashboard
						</ResponsiveNavLink>
					</div>

					<div className="pt-4 pb-1 border-t border-gray-200 dark:border-gray-600">
						<div className="mt-3 space-y-1">
							<ResponsiveNavLink href={route('welcome')} />
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
