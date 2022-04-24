import headerStyles from "./headertwo.module.scss";
import { DefaultSlideData } from "../../../utils/interfaces/Components/Slides";
import { FC, useState } from "react";
import MeetingDetails from "../../Widgets/MeetingDetails/MeetingDetails";
import { MeetingDetailsData } from "../../../utils/interfaces/Components/MeetingDetails";

const HeaderTwo: FC<DefaultSlideData> = ({ caption, title, description }) => {
	let [detailsVisible, setDetailsVisibility] = useState(() => false);

	const toggleDetails = () => {
		setDetailsVisibility(() => (detailsVisible ? false : true));
	};

	const meetingDetailsData: MeetingDetailsData = {
		detailSet: [
			{
				title: { titleText: "Date & time" },
				details: [
					{
						value: "Saturday, 23rd April",
						description: "Date",
					},
					{
						value: "8PM GMT / 3PM EST / 9PM CET",
						description: "Time",
					},
				],
			},
			{
				title: { titleText: "Zoom Details" },
				details: [
					{
						value: "939 167 6823",
						description: "Zoom Id",
					},
					{
						value: "LAMP",
						description: "Passcode",
					},
				],
			},
		],
		clickFunction: toggleDetails,
	};

	return (
		<div
			className={`${detailsVisible && headerStyles.detailsVisible} ${
				headerStyles.headerContainer
			}`}
		>
			{!detailsVisible ? (
				<div className={headerStyles.headerContent}>
					<div className={headerStyles.caption}>
						<p className="caption-2-bold">{caption}</p>
					</div>
					<div className={headerStyles.name}>
						<p className="title-2">{title}</p>
					</div>
					<div className={headerStyles.theme}>
						<p className="heading-3">{description}</p>
					</div>
					<div className={headerStyles.action}>
						<button
							onClick={() => toggleDetails()}
							className={`caption-1 ${headerStyles.actionBtn}`}
						>
							Details
							<i
								className={`bx bx-plus ${headerStyles.detailsIcon} caption-2`}
							></i>
						</button>
					</div>
				</div>
			) : (
				<MeetingDetails
					detailSet={meetingDetailsData.detailSet}
					clickFunction={meetingDetailsData.clickFunction}
				/>
			)}
		</div>
	);
};

export default HeaderTwo;
