import type { FC } from "react";
import { GenericSlideData } from "../../../utils/interfaces/Components/Slides";
import gs from "./genericslide.module.scss";

const GenericSlide: FC<GenericSlideData> = ({ shade, children }) => {
	return <div className={gs[shade]}>{children}</div>;
};

export default GenericSlide;
