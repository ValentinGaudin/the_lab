import React from 'react';
import { InertiaLinkProps, Link } from '@inertiajs/react';

const NavLink = ({
	active = false,
	className = '',
	children,
	...props
}: InertiaLinkProps & { active: boolean }) => {
	return (
		<Link
			{...props}
			className={
				'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +
				(active
					? 'border-dark-blue dark:border-cold-steel text-dark-blue dark:text-cold-steel '
					: 'border-transparent text-dark-blue dark:text-cold-steel hover:text-dark-blue/70 dark:hover:text-cold-steel/70 dark:hover:border-cold-steel hover:border-dark-blue dark:focus:text-pearl focus:text-primary-light focus:border-primary-light dark:focus:border-pearl ') +
				className
			}
		>
			{children}
		</Link>
	);
};

export default NavLink;
