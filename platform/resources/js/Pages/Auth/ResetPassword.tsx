import React, { FormEventHandler, useEffect } from 'react';
import { GuestTemplate } from '@/Components/templates';
import InputError from '@/Components/atoms/InputError';
import InputLabel from '@/Components/atoms/InputLabel';
import PrimaryButton from '@/Components/atoms/PrimaryButton';
import TextInput from '@/Components/atoms/TextInput';
import { Head, useForm } from '@inertiajs/react';

const ResetPassword = ({ token, email }: { token: string; email: string }) => {
	const { data, setData, post, processing, errors, reset } = useForm({
		token,
		email,
		password: '',
		password_confirmation: '',
	});

	useEffect(() => {
		return () => {
			reset('password', 'password_confirmation');
		};
	}, []);

	const submit: FormEventHandler = (e) => {
		e.preventDefault();

		post(route('password.store'));
	};

	return (
		<GuestTemplate>
			<Head title="Reset Password" />

			<form onSubmit={submit}>
				<div>
					<InputLabel htmlFor="email" value="Email" />

					<TextInput
						id="email"
						type="email"
						name="email"
						value={data.email}
						className="mt-1 block w-full"
						autoComplete="username"
						onChange={(e) => setData('email', e.target.value)}
					/>

					<InputError message={errors.email} className="mt-2" />
				</div>

				<div className="mt-4">
					<InputLabel htmlFor="password" value="Password" />

					<TextInput
						id="password"
						type="password"
						name="password"
						value={data.password}
						className="mt-1 block w-full"
						autoComplete="new-password"
						isFocused={true}
						onChange={(e) => setData('password', e.target.value)}
					/>

					<InputError message={errors.password} className="mt-2" />
				</div>

				<div className="mt-4">
					<InputLabel
						htmlFor="password_confirmation"
						value="Confirm Password"
					/>

					<TextInput
						type="password"
						name="password_confirmation"
						value={data.password_confirmation}
						className="mt-1 block w-full"
						autoComplete="new-password"
						onChange={(e) => setData('password_confirmation', e.target.value)}
					/>

					<InputError message={errors.password_confirmation} className="mt-2" />
				</div>

				<div className="flex items-center justify-end mt-4">
					<PrimaryButton className="ms-4" disabled={processing}>
						Reset Password
					</PrimaryButton>
				</div>
			</form>
		</GuestTemplate>
	);
};

export default ResetPassword;