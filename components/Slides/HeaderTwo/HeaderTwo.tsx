import type { NextPage } from "next";
import headerStyles from "./headertwo.module.scss";
import { IconButton } from "../../Interactive/Button/Button";

const HeaderTwo: NextPage = () => {
	return (
		<div className={headerStyles.headerContainer}>
			<div className={headerStyles.headerContent}>
				<div className={headerStyles.upcoming}>
					<p className="caption-2">Upcoming</p>
				</div>
				<div className={headerStyles.time}>
					<p className={`caption-3 ${headerStyles.timegmt}`}>20:00 GMT</p>
					<p className={`caption-3 ${headerStyles.day}`}>Saturday</p>
				</div>
				<div className={headerStyles.name}>
					<p className="title-1">The Lamp Service</p>
				</div>
				<div className={headerStyles.theme}>
					<p className="heading-2">Perception &amp; Discernment</p>
				</div>
				<div className={headerStyles.action}>
					<button className={headerStyles.actionBtn}>
						Details <i className={`bx bx-plus ${headerStyles.detailsIcon}`}></i>
					</button>
					{/* <IconButton
						icon="plus"
						weight="transparent"
						color="primary"
						size="body"
						label="Details"
						iconSize="regular"
					/> */}
				</div>
			</div>
		</div>
	);
};

export default HeaderTwo;
