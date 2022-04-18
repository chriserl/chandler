import { Link } from "./Link";
import { IconButton } from "./Button";
import HeaderTwo from "../../../components/Slides/HeaderTwo/HeaderTwo";
import type { ReactChildren } from "react";
import { Icon } from "./Icon";

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
	title: string;
	description?: string | number;
	extra?: string | number;
	linkData?: Link;
	buttonData?: IconButton;
}

export interface HeaderTwo extends DefaultSlideData {
	time: { timegmt: string; day: string };
}

export interface SlideOne extends DefaultSlideData {
	shade: "light" | "transparent";
	textPosition: "textTop" | "textBottom";
}

export interface SlideTwo extends DefaultSlideData {
	shade: "light" | "transparent";
	textPosition: "textRight" | "textLeft";
}

export interface SlideThree extends DefaultSlideData {
	shade: "light" | "transparent";
	alignment: "right" | "left";
}

export interface SlideFour extends DefaultSlideData {
	children: ReactChildren;
	shade: "light" | "transparent";
}

export interface SlideSix extends DefaultSlideData {
	iconData?: Icon;
}
