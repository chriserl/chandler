import { Icon } from "./Icon";

export interface TextButton {
	weight: "solid" | "bordered" | "transparent";
	color: "primary" | "secondary" | "gray" | "white";
	size: string;
	label: string;
	clickFunction?: Function;
}

export interface IconButton extends TextButton {
	iconPosition?: "iconLeft";
	icon: Icon["name"];
	iconColor: Icon["color"];
	iconSize: Icon["size"];
}
