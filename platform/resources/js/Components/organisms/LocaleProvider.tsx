import React, { createContext, PropsWithChildren } from 'react';
import { usePage } from '@inertiajs/react';
import { LocaleKey } from '@/types';

type Context = {
	locale: LocaleKey;
};

export const LocaleContext = createContext<Context | undefined>(undefined);

const LocaleProvider = ({ children }: PropsWithChildren) => {
	const { locale } = usePage<InertiaProps>().props;

	return (
		<LocaleContext.Provider
			value={{
				locale,
			}}
		>
			{children}
		</LocaleContext.Provider>
	);
};

export default LocaleProvider;
