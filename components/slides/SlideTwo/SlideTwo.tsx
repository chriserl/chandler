import type { FC } from "react";
import { SlideTwo } from "../../../utils/interfaces/Components/Slides";
import GenericSlide from "../GenericSlide/GenericSlide";
import slide from "./slidetwo.module.scss";
import { Link } from "../../Interactive/Link/Link";

const SlideTwo: FC<SlideTwo> = ({ shade, textPosition }) => {
	return (
		<GenericSlide shade={shade}>
			<div className={`${slide.slide} ${slide[textPosition]}`}>
				<div className={slide.slideText}>
					<div className={slide.text}>
						<p className={`${slide.caption} caption-2`}></p>
						<p className={`${slide.title} title-3`}>Messages</p>
						<p className={`${slide.description} heading-4`}>
							Listen to recorded messages <br /> from our meetings right here{" "}
							<br />
							or on your fave podcast app.
						</p>
						<p className={`${slide.extra} body`}></p>
						<Link
							label="Listen now"
							url="#"
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

export default SlideTwo;
