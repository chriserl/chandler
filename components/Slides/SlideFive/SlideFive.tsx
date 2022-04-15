import type { FC } from "react";
import GenericSlide from "../GenericSlide/GenericSlide";
import slide from "./slidefive.module.scss";

const SlideFive: FC = ({ children }) => {
	return (
		<GenericSlide shade="light">
			<div className={slide.slide}>
				<p className={`${slide.title} title-2`}>Meet Our Leaders.</p>
				<div className={slide.flex}>{children}</div>
			</div>
		</GenericSlide>
	);
};

export default SlideFive;
