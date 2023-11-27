import React, { ReactNode } from 'react';

import { useModalStore } from '@/hooks';

type Props = {
	children: ReactNode;
};

function Modales({ children }: Props) {
	const modal = useModalStore((state) => state.modal);

	return (
		<>
			{modal ? modal.element : null}
			{children}
		</>
	);
}

export default Modales;
