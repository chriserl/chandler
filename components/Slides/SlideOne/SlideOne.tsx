import type { FC } from "react";
import { SlideOne } from "../../../utils/interfaces/Components/Slides";
import GenericSlide from "../GenericSlide/GenericSlide";
import slide from "./slideone.module.scss";
import { Link } from "../../Interactive/Link/Link";

const SlideOne: FC<SlideOne> = ({ shade, textPosition }) => {
	return (
		<GenericSlide shade={shade}>
			<div className={`${slide.slide} ${slide[textPosition]}`}>
				<div className={slide.slideText}>
					<div className={slide.text}>
						<p className={`${slide.caption} caption-2`}></p>
						<p className={`${slide.title} title-3`}>Who are we?</p>
						<p className={`${slide.description} heading-4`}>
							Learn more about us, our <br />
							vision and our mission.
						</p>
						<Link
							label="About us"
							url="/"
							icon="chevron-right"
							size="body"
							iconSize="medium"
						/>
					</div>
				</div>
				<div className={slide.imageContainer}>
					<img
						src="/images/slideimage.jpg"
						alt="slide Image"
						className={slide.image}
					/>
				</div>
			</div>
		</GenericSlide>
	);
};

export default SlideOne;
