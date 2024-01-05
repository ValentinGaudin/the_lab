import React, { InertiaLinkProps, Link } from '@inertiajs/react';

const ResponsiveNavLink = ({
	active = false,
	className = '',
	children,
	...props
}: InertiaLinkProps & { active?: boolean }) => {
	return (
		<Link
			{...props}
			className={`w-full flex items-end justify-end space-x-2 space-y-4 p-3 border-r-4 ${
				active
					? 'border-primary-dark dark:border-secondary-light text-primary-dark dark:text-primary-light bg-secondary-dark/20 dark:bg-secondary-light/50 focus:text-primary-dark dark:focus:text-primary-light focus:bg-secondary-dark dark:focus:bg-secondary-light focus:border-secondary-dark dark:focus:border-secondary-dark'
					: 'border-transparent text-gray-600 dark:text-gray-400 hover:text-ternary-dark dark:hover:text-ternary-light hover:bg-secondary-dark/50 dark:hover:bg-secondary-light/70 hover:border-secondary-dark dark:hover:border-secondary-light focus:text-primary-dark dark:focus:text-primary-light focus:bg-secondary-dark dark:focus:bg-secondary-light focus:border-secondary-dark dark:focus:border-secondary-light'
			} text-base font-medium focus:outline-none transition duration-150 ease-in-out ${className}`}
		>
			{children}
		</Link>
	);
};

export default ResponsiveNavLink;
