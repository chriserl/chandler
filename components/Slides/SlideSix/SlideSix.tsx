import type { FC } from "react";
import GenericSlide from "../GenericSlide/GenericSlide";
import { Icon } from "../../Interactive/Icon/Icon";
import slide from "./slidesix.module.scss";
import { SlideSixData } from "../../../utils/interfaces/Components/Slides";

const SlideSix: FC<SlideSixData> = ({
	iconData,
	title,
	description,
	extra,
}) => {
	return (
		<GenericSlide shade="light">
			<div className={slide.slide}>
				{iconData && (
					<Icon
						name={iconData.name}
						size={iconData.size}
						padding={false}
						weight={iconData.weight}
						color={iconData.color}
					/>
				)}
				<p className={`body-bold ${slide["title"]}`}>{title}</p>
				<div className={slide["mainTextArea"]}>
					<p className={`title-2-bold ${slide["description"]}`}>
						{description}
					</p>
					<p className={`caption-2 ${slide.extra}`}>{extra}</p>
				</div>
			</div>
		</GenericSlide>
	);
};

export default SlideSix;
