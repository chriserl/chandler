export interface TextButton {
	weight: "solid" | "bordered" | "transparent";
	color: "primary" | "secondary" | "gray";
	size: string;
	label: string;
}

export interface IconButton {
	icon: string;
	weight: "solid" | "bordered" | "transparent";
	color: "primary" | "secondary" | "gray";
	size: string;
	iconSize: "small" | "regular" | "medium" | "large";
	label: string;
}
