import React, { LabelHTMLAttributes } from 'react';

const InputLabel = ({
	value,
	className = '',
	children,
	...props
}: LabelHTMLAttributes<HTMLLabelElement> & { value?: string }) => {
	return (
		<label
			{...props}
			className={
				`block font-medium text-sm text-gray-700 dark:text-gray-300 ` +
				className
			}
		>
			{value ? value : children}
		</label>
	);
};

export default InputLabel;
