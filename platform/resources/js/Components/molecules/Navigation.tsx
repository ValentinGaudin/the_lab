import React, { useEffect, useState } from 'react';

import {
	ApplicationLogo,
	ResponsiveNavLink,
	NavLink,
	ToggleTheme,
} from '@/Components/atoms';
import useLocale from '@/hooks/useLocale';

const Navigation = () => {
	const [animationStarted, setAnimationStarted] = useState(false);
	const [showingNavigationDropdown, setShowingNavigationDropdown] =
		useState(false);

	const { locale } = useLocale();

	useEffect(() => {
		if (showingNavigationDropdown) {
			document.body.classList.add('overflow-hidden');
		} else {
			document.body.classList.remove('overflow-hidden');
		}
	}, [showingNavigationDropdown]);

	useEffect(() => {
		if (showingNavigationDropdown) {
			setTimeout(() => {
				setAnimationStarted(true);
			}, 300);
		} else {
			setAnimationStarted(false);
		}
	}, [showingNavigationDropdown]);

	return (
		<nav className="sticky top-0 backdrop-blur w-full z-50">
			<div className="flex justify-between items-center sm:-my-px relative px-10 py-4">
				<NavLink href={route('welcome')} active={route().current('welcome')}>
					<ApplicationLogo className="w-14 h-14 fill-current block md:hidden" />
					<h1 className="hidden md:block text-xl font-title uppercase bg-gradient-to-r from-primary-dark via-secondary to-ternary animate-gradientMouvementHorizontal bg-[length:300%_100%] duration-500 bg-clip-text text-transparent">
						Le labo
					</h1>
				</NavLink>

				<div className="flex items-center sm:hidden space-x-5">
					<ToggleTheme />
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

				<div className="hidden sm:flex space-x-8">
					<NavLink
						href={route(`blog.index`, locale)}
						active={route().current(`blog.index`, locale)}
					>
						Blog
					</NavLink>
					<NavLink
						href={route('blog.topic.index', [locale, 'essai'])}
						active={route().current('blog.topic.index', [locale, 'essai'])}
					>
						Essais
					</NavLink>
					<NavLink
						href={route('blog.topic.index', [locale, 'experience'])}
						active={route().current('blog.topic.index', [locale, 'experience'])}
					>
						Expériences
					</NavLink>
					<ToggleTheme />
				</div>

				<div
					className={`${showingNavigationDropdown ? 'block' : 'hidden'} ${
						animationStarted ? 'translate-x-0' : 'translate-x-full'
					}
					z-50 absolute top-24 w-full right-0 sm:hidden bg-gradient-to-b from-white/80 to-white/20 dark:from-gray-700/80 dark:to-gray-400/20 backdrop-blur-4xl transition-all duration-700`}
				>
					<div className="space-y-2">
						<ResponsiveNavLink
							href={route(`blog.index`, locale)}
							active={route().current(`blog.index`, locale)}
						>
							Blog
						</ResponsiveNavLink>
						<ResponsiveNavLink
							href={route('blog.topic.index', [locale, 'essai'])}
							active={route().current('blog.topic.index', [locale, 'essai'])}
						>
							Essais
						</ResponsiveNavLink>
						<ResponsiveNavLink
							href={route('blog.topic.index', [locale, 'experience'])}
							active={route().current('blog.topic.index', [
								locale,
								'experience',
							])}
						>
							Expériences
						</ResponsiveNavLink>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
