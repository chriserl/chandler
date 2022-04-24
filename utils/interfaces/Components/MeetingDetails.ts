interface DetailSet {
	title: {
		titleText: string;
		action?: string;
	};
	details: Detail[];
}

export interface Detail {
	value: string;
	description: string;
}

export interface MeetingDetailsData {
	detailSet: DetailSet[];
	clickFunction: Function;
}
