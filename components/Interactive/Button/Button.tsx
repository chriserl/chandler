import type { FC } from "react";
import {
	IconButton,
	TextButton,
} from "../../../utils/interfaces/Components/Button";
import { Icon } from "../Icon/Icon";
import button from "./button.module.scss";

const TextButton: FC<TextButton> = ({
	weight,
	size,
	label,
	color,
	clickFunction,
}) => {
	return (
		<button
			onClick={() => clickFunction && clickFunction()}
			className={`${button.textButton} ${button[weight]}`}
		>
			<p className={`${size}  ${button[color]}`}>{label}</p>
		</button>
	);
};

const IconButton: FC<IconButton> = ({
	weight,
	size,
	label,
	iconSize,
	color,
	icon,
	iconColor,
	iconPosition,
	clickFunction,
}) => {
	return (
		<button
			className={`${button.iconButton} ${button[weight]} ${
				iconPosition && button[iconPosition]
			}`}
			onClick={() => clickFunction && clickFunction()}
		>
			<p className={`button.${size} ${button[color]}`}>{label}</p>
			<Icon
				name={icon}
				size={iconSize}
				padding={false}
				weight="line"
				color={iconColor}
			/>
		</button>
	);
};

export { TextButton, IconButton };
