import React from 'react';
import DOMPurify from 'dompurify';
import { BaseModal } from '@/Components/atoms/index';

type Props = {
	currentModal: string;
	inspiringQuote: string;
};

const StartUpModal = ({ currentModal, inspiringQuote }: Props) => {
	const cleanQuote = DOMPurify.sanitize(inspiringQuote, {
		USE_PROFILES: { html: true },
	});

	return (
		<BaseModal
			title={'Welcome'}
			currentModal={currentModal}
			validButton={'Merci'}
			hasCloseButton={false}
		>
			<div className="dark:text-white text-dark/50 font-regular text-sm w-full">
				<p>{cleanQuote}</p>
			</div>
		</BaseModal>
	);
};

export default StartUpModal;
