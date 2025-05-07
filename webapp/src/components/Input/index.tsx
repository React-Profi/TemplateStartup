import cn from 'classnames';
import { type FormikProps } from 'formik';

import css from './index.module.scss';

export const Input = ({
	name,
	label,
	formik,
	maxWidth
}: {
	name: string;
	label: string;
	formik: FormikProps<any>;
	maxWidth?: number;
}) => {
	const value = formik.values[name];
	const error = formik.errors[name] as string | undefined;
	const touched = formik.touched[name];
	const invalid = !!touched && !!error;
	const disabled = formik.isSubmitting;

	return (
		<div className={cn(css.field, { [css['field--disabled']]: disabled })}>
			<label className={css['field__label']} htmlFor={name}>
				{label}
			</label>
			<input
				className={cn(css['field__input'], {
					[css['field__input--invalid']]: invalid
				})}
				style={{ maxWidth }}
				type='text'
				id={name}
				name={name}
				value={value}
				disabled={disabled}
				onChange={e => {
					void formik.setFieldValue(name, e.target.value);
				}}
				onBlur={() => {
					void formik.setFieldTouched(name);
				}}
			/>
			{invalid && <div className={css['field__error']}>{error}</div>}
		</div>
	);
};
