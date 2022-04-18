import type { FC } from "react";
import { SlideFour } from "../../../utils/interfaces/Components/Slides";
import GenericSlide from "../GenericSlide/GenericSlide";
import slide from "./slidefive.module.scss";

const SlideFive: FC<SlideFour> = ({ children, shade, title }) => {
	return (
		<GenericSlide shade={shade}>
			<div className={slide.slide}>
				<p className={`${slide.title} title-2`}>{title}</p>
				<div className={slide.flex}>{children}</div>
			</div>
		</GenericSlide>
	);
};

export default SlideFive;
