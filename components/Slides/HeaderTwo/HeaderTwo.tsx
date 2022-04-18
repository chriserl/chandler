import type { NextPage } from "next";
import headerStyles from "./headertwo.module.scss";
import { HeaderTwo } from "../../../utils/interfaces/Components/Slides";

const HeaderTwo: NextPage<HeaderTwo> = ({
	caption,
	title,
	description,
	time,
}) => {
	return (
		<div className={headerStyles.headerContainer}>
			<div className={headerStyles.headerContent}>
				<div className={headerStyles.upcoming}>
					<p className="caption-2">{caption}</p>
				</div>
				<div className={headerStyles.time}>
					<p className={`caption-3 ${headerStyles.timegmt}`}>{time.timegmt}</p>
					<p className={`caption-3 ${headerStyles.day}`}>{time.day}</p>
				</div>
				<div className={headerStyles.name}>
					<p className="title-1">{title}</p>
				</div>
				<div className={headerStyles.theme}>
					<p className="heading-2">{description}</p>
				</div>
				<div className={headerStyles.action}>
					<button className={headerStyles.actionBtn}>
						Details <i className={`bx bx-plus ${headerStyles.detailsIcon}`}></i>
					</button>
				</div>
			</div>
		</div>
	);
};

export default HeaderTwo;
