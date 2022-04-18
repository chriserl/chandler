import type { FC } from "react";
import { SlideThree } from "../../../utils/interfaces/Components/Slides";
import GenericSlide from "../GenericSlide/GenericSlide";
import slide from "./slidethree.module.scss";

const SlideThree: FC<SlideThree> = ({
	shade,
	alignment,
	image,
	caption,
	title,
}) => {
	return (
		<GenericSlide shade={shade}>
			<div className={`${slide.slide} ${slide[alignment]}`}>
				<p className={`${slide.caption} heading-4`}>{caption}</p>
				<p className={`${slide.title} title-2`}>{title}</p>
			</div>
		</GenericSlide>
	);
};

export default SlideThree;
