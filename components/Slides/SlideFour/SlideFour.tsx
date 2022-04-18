import type { FC } from "react";
import GenericSlide from "../GenericSlide/GenericSlide";
import slide from "./slidefour.module.scss";
import { SlideFourData } from "../../../utils/interfaces/Components/Slides";

const SlideFour: FC<SlideFourData> = ({ children, shade }) => {
	return (
		<GenericSlide shade={shade}>
			<div className={slide.slide}>
				<div className={slide.masonry}>{children}</div>
			</div>
		</GenericSlide>
	);
};

export default SlideFour;
