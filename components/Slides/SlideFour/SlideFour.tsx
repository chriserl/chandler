import type { FC } from "react";
import GenericSlide from "../GenericSlide/GenericSlide";
import slide from "./slidefour.module.scss";

const SlideFour: FC = ({ children }) => {
	return (
		<GenericSlide shade="transparent">
			<div className={slide.slide}>
				<div className={slide.masonry}>{children}</div>
			</div>
		</GenericSlide>
	);
};

export default SlideFour;
