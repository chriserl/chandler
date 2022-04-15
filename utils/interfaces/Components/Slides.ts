export interface SlideContainer {
	flow: "column" | "row";
	shade: "light" | "gray";
}

export interface GenericSlide {
	shade: "light" | "transparent";
}

export interface SlideOne {
	shade: "light" | "transparent";
	textPosition: "textTop" | "textBottom";
}

export interface SlideTwo {
	shade: "light" | "transparent";
	textPosition: "textRight" | "textLeft";
}
