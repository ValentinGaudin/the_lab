import { useContext } from 'react';
import { LocaleContext } from '@/Components/organisms/LocaleProvider';

export default () => {
	const context = useContext(LocaleContext);

	if (context === undefined) {
		throw new Error('useLocale must be used within a LocaleProvider');
	}

	return context;
};
