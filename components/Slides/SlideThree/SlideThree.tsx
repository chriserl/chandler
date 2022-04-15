import type { FC } from "react";
import { SlideThree } from "../../../utils/interfaces/Components/Slides";
import GenericSlide from "../GenericSlide/GenericSlide";
import slide from "./slidethree.module.scss";

const SlideThree: FC<SlideThree> = ({ shade, alignment }) => {
	return (
		<GenericSlide shade={shade}>
			<div className={`${slide.slide} ${slide[alignment]}`}>
				<p className={`${slide.title} heading-4`}>Our Mission</p>
				<p className={`${slide.mainText} title-2`}>
					Youth Network is geared towards young people. To empower, equip and
					develop them through purpose-driven experiences, and to grow a deeper
					relationship with God.
				</p>
			</div>
		</GenericSlide>
	);
};

export default SlideThree;
