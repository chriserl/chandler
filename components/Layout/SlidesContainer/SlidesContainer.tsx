import type { FC } from "react";
import { SlideContainer } from "../../../utils/interfaces/Components/Slides";
import sc from "./slidescontainer.module.scss";

const SlidesContainer: FC<SlideContainer> = ({ flow, shade, children }) => {
	return (
		<div className={sc.sc}>
			<div className={`${sc[flow]} ${sc[shade]}`}>{children}</div>
		</div>
	);
};

export default SlidesContainer;
