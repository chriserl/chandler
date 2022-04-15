import type { FC } from "react";
import {
	IconButton,
	TextButton,
} from "../../../utils/interfaces/Components/Button";
import { Icon } from "../Icon/Icon";
import button from "./button.module.scss";

const TextButton: FC<TextButton> = ({ weight, size, label }) => {
	return (
		<button className={button.textButton}>
			<p className={`button.${size}`}>{label}</p>
		</button>
	);
};

const IconButton: FC<IconButton> = ({ weight, size, label, iconSize }) => {
	return (
		<button className={button.iconButton}>
			<p className={`button.${size}`}>{label}</p>
			<Icon name="plus" size={iconSize} padding={false} />
		</button>
	);
};

export { TextButton, IconButton };
