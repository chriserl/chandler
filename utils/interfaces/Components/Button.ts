import { Icon } from "./Icon";

export interface TextButton {
	weight: "solid" | "bordered" | "transparent";
	color: "primary" | "secondary" | "gray";
	size: string;
	label: string;
	clickFunction?: Function;
}

export interface IconButton extends TextButton {
	icon: Icon["name"];
	iconColor: Icon["color"];
	iconSize: Icon["size"];
}
