import type { FC } from "react";
import { SlideOneData } from "../../../utils/interfaces/Components/Slides";
import GenericSlide from "../GenericSlide/GenericSlide";
import slide from "./slideeight.module.scss";
import { Link } from "../../Interactive/Link/Link";

const SlideEight: FC<SlideOneData> = ({
	shade,
	textPosition,
	caption,
	title,
	description,
	linkData,
}) => {
	return (
		<GenericSlide shade={shade}>
			<div className={`${slide.slide} ${slide[textPosition]}`}>
				<div className={slide.slideText}>
					<div className={slide.text}>
						<p className={`${slide.caption} caption-2`}>{caption}</p>
						<p className={`${slide.title} heading-1`}>{title}</p>
						<p className={`${slide.description} body-bold`}>{description}</p>
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
				</div>
			</div>
		</GenericSlide>
	);
};

export default SlideEight;
