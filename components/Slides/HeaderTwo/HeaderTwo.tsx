import type { NextPage } from "next";
import headerStyles from "./headertwo.module.scss";
import { DefaultSlideData } from "../../../utils/interfaces/Components/Slides";

const HeaderTwo: NextPage<DefaultSlideData> = ({
	caption,
	title,
	description,
}) => {
	return (
		<div className={headerStyles.headerContainer}>
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
					<button className={`caption-1 ${headerStyles.actionBtn}`}>
						Details
						<i
							className={`bx bx-plus ${headerStyles.detailsIcon} caption-2`}
						></i>
					</button>
				</div>
			</div>
		</div>
	);
};

export default HeaderTwo;
