import React, { useMemo } from 'react';

import { Navigation } from '@/Components/molecules';
import { usePage } from '@inertiajs/react';
import DOMPurify from 'dompurify';

type Props = {
	title?: string;
};

const Header = ({ title }: Props) => {
	const { inspiringQuote } = usePage<InertiaProps>().props;
	const { tip } = usePage<InertiaProps>().props;

	const cleanQuote = useMemo(() => {
		return DOMPurify.sanitize(inspiringQuote, {
			USE_PROFILES: { html: true },
		});
	}, [inspiringQuote]);

	return (
		<header className="w-full relative z-50 bg-gradient-to-b from-gray-200/80 to-gray-50/40 dark:from-dark/90 dark:to-dark/20">
			<Navigation />
			<div className="pb-24 sm:pb-32 relative w-full max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-7xl items-center mx-auto grid gap-y-12 p-8">
				<div>
					<h1 className="text-5xl capitalize font-bold text-ternary">
						Le Labo • {title}
					</h1>
					<p className="mt-4 text-gray-600 dark:text-cold-steel">
						Vos dernières nouveautés via le Labo.
					</p>
				</div>

				<div className="flex justify-end">
					<div>
						<div className="group relative max-w-[400px]">
							<div className="rounded-lg border border-gray-300 p-6 text-sm text-gray-600 shadow-lg transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-gray-100 lg:ml-auto lg:p-8">
								{route().current('welcome') ? (
									<>
										<div className="font-medium">
											<p className="inline-flex rounded-sm transition duration-300 leading-none font-bold text-ternary group-hover:text-ternary">
												Votre citation :
											</p>
										</div>
										<p className="mt-1 text-dark-blue dark:text-cold-steel">
											{cleanQuote}
										</p>
									</>
								) : (
									<>
										<div className="font-medium">
											<p className="inline-flex rounded-sm transition duration-300 leading-none font-bold text-ternary group-hover:text-ternary-light">
												{tip.title}
											</p>
										</div>
										<p className="mt-1 text-dark-blue dark:text-cold-steel">
											{tip.description}
										</p>

										<a
											className="inline-flex rounded-sm transition duration-300 leading-none focus:outline-none focus-visible:ring-2 focus-visible:ring-ternary-dark absolute inset-0 h-full w-full"
											href={tip.link}
										>
											<span className="sr-only">Visit {tip.title}</span>
										</a>
									</>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
