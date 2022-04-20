export interface Icon {
	name: string;
	padding: false | true;
	weight: "line" | "solid";
	size: "small" | "regular" | "medium" | "large" | "xlarge" | "xxlarge";
	color?: "white" | "primary" | "secondary" | "gray" | "black";
}
