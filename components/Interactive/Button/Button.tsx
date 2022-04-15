import type { FC } from "react";
import {
	IconButton,
	TextButton,
} from "../../../utils/interfaces/Components/Button";
import { Icon } from "../Icon/Icon";
import button from "./button.module.scss";

const TextButton: FC<TextButton> = ({ weight, size, label, color }) => {
	return (
		<button
			className={`${button.textButton} ${button[weight]} ${button[color]}`}
		>
			<p className={`button.${size}`}>{label}</p>
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
}) => {
	return (
		<button
			className={`${button.iconButton} ${button[weight]} ${button[color]}`}
		>
			<p className={`button.${size}`}>{label}</p>
			<Icon name={icon} size={iconSize} padding={false} />
		</button>
	);
};

export { TextButton, IconButton };
