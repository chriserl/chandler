import type { FC } from "react";
import { SlideOneData } from "../../../utils/interfaces/Components/Slides";
import GenericSlide from "../GenericSlide/GenericSlide";
import slide from "./slideone.module.scss";
import { Link } from "../../Interactive/Link/Link";

const SlideOne: FC<SlideOneData> = ({
	shade,
	textPosition,
	image,
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
						<p className={`${slide.title} title-2`}>{title}</p>
						<p className={`${slide.description} heading-4`}>{description}</p>
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
				<div className={slide.imageContainer}>
					<img src={image} alt={title} className={slide.image} />
				</div>
			</div>
		</GenericSlide>
	);
};

export default SlideOne;
