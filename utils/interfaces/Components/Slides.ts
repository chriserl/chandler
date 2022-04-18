import { Link } from "./Link";
import { IconButton } from "./Button";

export interface SlideContainer {
	flow: "column" | "row";
	shade: "light" | "gray";
}

export interface GenericSlide {
	shade: "light" | "transparent";
}

export interface DefaultSlideData {
	image?: string;
	caption?: string | number;
	title: string | number;
	description?: string | number;
	extra?: string | number;
	linkData?: Link;
	buttonData?: IconButton;
}

export interface SlideOne {
	shade: "light" | "transparent";
	textPosition: "textTop" | "textBottom";
}

export interface SlideTwo {
	shade: "light" | "transparent";
	textPosition: "textRight" | "textLeft";
}

export interface SlideThree {
	shade: "light" | "transparent";
	alignment: "right" | "left";
}
