import { InputHTMLAttributes } from "react";

import styles from "./input.module.scss";
import uStyles from "../../styles/utils.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name?: string;
	label?: string;
	type: string;
	addSuffix?: boolean;
}

const Input = ({
	name,
	addSuffix = false,
	type,
	label,
	children,
	...rest
}: InputProps) => {
	return (
		<div className={`${styles.inputGroup}`}>
			<input name={name} type={type} {...rest} />
			{label ? <label htmlFor={label}> {label} </label> : null}
			{addSuffix ? children : null}
		</div>
	);
};

export default Input;
