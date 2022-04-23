import { Link } from "./Link";
import { IconButton } from "./Button";
import type { ReactChildren } from "react";
import { Icon } from "./Icon";

export interface SlidesContainerData {
	flow: "column" | "row";
	shade: "light" | "gray";
}

export interface GenericSlideData {
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

export interface SlideOneData extends DefaultSlideData {
	shade: "light" | "transparent";
	textPosition: "textTop" | "textBottom";
}

export interface SlideTwoData extends DefaultSlideData {
	shade: "light" | "transparent";
	textPosition: "textRight" | "textLeft";
}

export interface SlideThreeData extends DefaultSlideData {
	shade: "light" | "transparent";
	alignment: "right" | "left";
}

export interface SlideFourData extends DefaultSlideData {
	children: ReactChildren;
	shade: "light" | "transparent";
}

export interface SlideSixData extends DefaultSlideData {
	iconData?: Icon;
}

export interface AlertMessageData {
	message: string;
	visibilityDuration: number;
}
