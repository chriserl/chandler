import { Link } from "./Link";
import { IconButton } from "./Button";
import HeaderTwo from "../../../components/Slides/HeaderTwo/HeaderTwo";

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

export interface HeaderTwo extends DefaultSlideData {
	time: { timegmt: string; day: string };
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
