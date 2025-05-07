import cn from 'classnames';
import { type FormikProps } from 'formik';

import css from './index.module.scss';
import baseCss from '../Input/index.module.scss';

export const Textarea = ({
	name,
	label,
	formik
}: {
	name: string;
	label: string;
	formik: FormikProps<any>;
}) => {
	const value = formik.values[name];
	const error = formik.errors[name] as string | undefined;
	const touched = formik.touched[name];
	const invalid = !!touched && !!error;
	const disabled = formik.isSubmitting;

	return (
		<div
			className={cn(baseCss.field, { [baseCss['field--disabled']]: disabled })}
		>
			<label className={baseCss['field__label']} htmlFor={name}>
				{label}
			</label>
			<textarea
				className={cn(
					baseCss['field__input'],
					css['field__input'], // Apply textarea-specific overrides
					{ [baseCss['field__input--invalid']]: invalid }
				)}
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
			{invalid && <div className={baseCss['field__error']}>{error}</div>}
		</div>
	);
};
