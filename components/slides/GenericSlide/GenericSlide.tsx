import type { FC } from "react";
import { GenericSlide } from "../../../utils/interfaces/Components/Slides";
import gs from "./genericslide.module.scss";

const GenericSlide: FC<GenericSlide> = ({ shade, children }) => {
	return <div className={gs[shade]}>{children}</div>;
};

export default GenericSlide;
