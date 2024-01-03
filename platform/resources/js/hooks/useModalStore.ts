import { ReactNode } from 'react';
import { create } from 'zustand';
import { Nullable } from '@/types/Common';

export type Modal = {
	name: string;
	element: ReactNode;
};

export type ModaleStore = {
	modal: Nullable<Modal>;
	showModal: (modal: Modal) => void;
	closeModal: (name: string) => void;
};

export default create<ModaleStore>((set, get) => ({
	modal: null,
	showModal: (modal) => {
		set({
			modal,
		});
	},
	closeModal: (name: string) => {
		const currentModal = get().modal;
		if (currentModal) {
			if (currentModal.name === name) {
				set({
					modal: null,
				});
			}
		}
	},
}));