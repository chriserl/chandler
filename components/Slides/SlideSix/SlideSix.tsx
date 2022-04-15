import type { FC } from "react";
import GenericSlide from "../GenericSlide/GenericSlide";
import { Icon } from "../../Interactive/Icon/Icon";
import slide from "./slidesix.module.scss";

const SlideSix: FC = () => {
	return (
		<GenericSlide shade="light">
			<div className={slide.slide}>
				<Icon name="bookmark" size="large" padding={false} solid={true} />
				<p className={`heading-4 ${slide["title"]}`}>Verse of the day</p>
				<div className={slide["mainTextArea"]}>
					<p className={`title-1 ${slide["mainText"]}`}>
						"Blessed are they that mourn: for they shall be comforted"
					</p>
					<p className={`caption-2 ${slide.details}`}>
						Matthew 4:3 {`[King James Version]`}
					</p>
				</div>
			</div>
		</GenericSlide>
	);
};

export default SlideSix;
