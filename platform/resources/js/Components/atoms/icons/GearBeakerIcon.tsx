import React, { HTMLProps } from 'react';

import iconBeaker from '@/../assets/icons/icon-gear-beaker.svg';

const GearBeakerIcon = ({
	className,
}: Pick<HTMLProps<HTMLElement>, 'className'>) => {
	return <img src={iconBeaker} alt={'icon de beaker'} className={className} />;
};

export default GearBeakerIcon;
