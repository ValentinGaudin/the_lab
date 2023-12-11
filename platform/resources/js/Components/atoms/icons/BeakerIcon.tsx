import React, { HTMLProps } from 'react';

import iconBeaker from '@/../assets/icons/icon-beaker-big.svg';
import { useThemeStore } from '@/hooks';

const BeakerIcon = ({
	className,
}: Pick<HTMLProps<HTMLElement>, 'className'>) => {
	const theme = useThemeStore((state) => state.theme);
	return <img src={iconBeaker} alt={'icon de beaker'} className={className} />;
};

export default BeakerIcon;
