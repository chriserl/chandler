export interface NavTheme {
	theme?: "dark";
}

export interface LinksData {
	links: string[];
}

export interface MobileNavState extends LinksData {
	open: true | false;
}
