export interface TextButton {
	weight?: "solid" | "bordered" | "transparent";
	size: string;
	label: string;
}

export interface IconButton {
	weight?: "solid" | "bordered" | "transparent";
	size: string;
	iconSize: "small" | "regular" | "medium" | "large";
	label: string;
}
