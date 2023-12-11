import React, { HTMLProps } from 'react';

import appIcon from '@/../assets/icons/icon-app.svg';

const ApplicationLogo = ({
	className,
}: Pick<HTMLProps<HTMLElement>, 'className'>) => {
	return <img src={appIcon} className={className} />;
};

export default ApplicationLogo;
