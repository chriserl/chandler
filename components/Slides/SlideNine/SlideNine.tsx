import type { FC } from "react";
import { SlideTwoData } from "../../../utils/interfaces/Components/Slides";
import GenericSlide from "../GenericSlide/GenericSlide";
import slide from "./slidenine.module.scss";
import { Link } from "../../Interactive/Link/Link";

const SlideNine: FC<SlideTwoData> = ({
	shade,
	textPosition,
	caption,
	title,
}) => {
	return (
		<GenericSlide shade={shade}>
			<div className={`${slide.slide} ${slide[textPosition]}`}>
				<div className={slide.slideText}>
					<div className={slide.text}>
						<p className={`${slide.caption} heading-4`}>{caption}</p>
						<p className={`${slide.title} title-3`}>{title}</p>
					</div>
				</div>
			</div>
		</GenericSlide>
	);
};

export default SlideNine;
