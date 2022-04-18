export interface TextButton {
	weight: "solid" | "bordered" | "transparent";
	color: "primary" | "secondary" | "gray";
	size: string;
	label: string;
	clickFunction?: Function;
}

export interface IconButton {
	icon: string;
	weight: "solid" | "bordered" | "transparent";
	color: "primary" | "secondary" | "gray";
	size: string;
	iconSize: "small" | "regular" | "medium" | "large";
	label: string;
	clickFunction?: Function;
}
