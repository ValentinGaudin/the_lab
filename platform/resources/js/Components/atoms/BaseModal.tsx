import React, { PropsWithChildren } from 'react';
import { useModalStore } from '@/hooks';

const BaseModal = ({
	title,
	validButton = 'Ok',
	closeButton = 'Annuler',
	currentModal,
	children,
}: PropsWithChildren<{
	title: string;
	validButton?: string;
	closeButton?: string;
	currentModal: string;
}>) => {
	const closeModal = useModalStore((state) => state.closeModal);

	return (
		<dialog
			id="modal"
			className="fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-20 transform transition-all w-full h-full bg-transparent"
			onClose={() => closeModal(currentModal)}
		>
			<div className="absolute inset-0 bg-stone-300/80 dark:bg-gray-900/75 z-50 opacity-50 ">
				<div
					className={`absolute bg-white dark:bg-gray-800 rounded-sm overflow-hidden shadow-xl transform transition-all w-full mx-auto max-w-xl top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2`}
				>
					<div className="h-full w-full">
						<div className="flex flex-col justify-between h-full w-full dark:bg-black/50 bg-white/50 backdrop-blur border border-solid dark:border-cold-steel rounded-sm border-dark-blue text-left dark:text-cold-steel text-dark-blue">
							<div className="px-8 md:px-16 py-8 space-y-10">
								<h2 className="text-xl font-title dark:text-primary text-dark">
									{title}
								</h2>

								{children}
							</div>
							<div className="flex flex-row text-center w-full bottom-0 border-0 border-t border-solid dark:border-cold-steel border-dark-blue divide-x divide-solid divide-dark-blue dark:divide-cold-steel">
								<button
									type={'button'}
									onClick={() => closeModal(currentModal)}
									className="basis-1/2 dark:text-white text-dark no-underline py-6 relative transition-all overflow-hidden after:content-[''] after:absolute after:bg-dark/20 after:dark:bg-white/20 after:top-0 after:-right-3 after:w-0 after:h-full after:transition-all after:-skew-x-12 after:duration-300 hover:after:w-[110%] dark:hover:text-primary hover:text-black hover:cursor-pointer"
								>
									<span className="relative z-20">{closeButton}</span>
								</button>
								<button
									type={'button'}
									onClick={() => closeModal(currentModal)}
									className="basis-1/2 font-bold dark:text-white text-dark no-underline py-6 relative bg-transparent transition-all overflow-hidden after:content-[''] after:absolute after:dark:bg-primary after:bg-brand after:top-0 after:-left-3 after:w-0 after:h-full after:transition-all after:-skew-x-12 after:duration-300 hover:after:w-[110%] hover:text-white hover:dark:text-dark hover:cursor-pointer"
								>
									<span className="relative z-20">{validButton}</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</dialog>
	);
};

export default BaseModal;
