import type { FC } from "react";
import headOne from "./headerone.module.scss";
import { Link } from "../../Interactive/Link/Link";
import { DefaultSlideData } from "../../../utils/interfaces/Components/Slides";

const HeaderOne: FC<DefaultSlideData> = ({ title, description, linkData }) => {
	return (
		<div className={headOne.headOne}>
			<p className={`${headOne.title} title-2`}>{title}</p>
			<p className={`${headOne.description} heading-4`}>{description}</p>
			{linkData && (
				<Link
					label={linkData.label}
					url={linkData.url}
					icon={linkData.icon}
					size={linkData.size}
					iconSize={linkData.iconSize}
				/>
			)}
		</div>
	);
};

export default HeaderOne;
