import styles from "./slideseven.module.scss";
import { HeaderData } from "../../../utils/interfaces/Components/Slides";
import { FC, useState } from "react";
import MeetingDetails from "../../Widgets/MeetingDetails/MeetingDetails";
import { MeetingDetailsData } from "../../../utils/interfaces/Components/MeetingDetails";

const SlideSeven: FC<HeaderData> = ({
	caption,
	title,
	description,
	background,
}) => {
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
			style={{
				backgroundImage: `url(${background})`,
			}}
			className={`${detailsVisible && styles.detailsVisible} ${
				styles.container
			}`}
		>
			{!detailsVisible ? (
				<div className={styles.content}>
					<div className={styles.caption}>
						<p className="caption-2">{caption}</p>
					</div>
					<div className={styles.name}>
						<p className="heading-1-bold">{title}</p>
					</div>
					<div className={styles.theme}>
						<p className="heading-3">{description}</p>
					</div>
					<div className={styles.action}>
						<button
							onClick={() => toggleDetails()}
							className={`caption-2 ${styles.actionBtn}`}
						>
							Details
							<i className={`bx bx-plus ${styles.detailsIcon} caption-2`}></i>
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

export default SlideSeven;
