import type { FC } from "react";
import GenericSlide from "../GenericSlide/GenericSlide";
import slide from "./gallery.module.scss";

const Gallery: FC = () => {
	return (
		<GenericSlide shade="transparent">
			<div className={slide.slide}>
				<div className={slide.gallery}>
					<img src="/" alt="image" />
				</div>
			</div>
		</GenericSlide>
	);
};

export default Gallery;
