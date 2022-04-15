import type { FC } from "react";
import { Icon } from "../../../utils/interfaces/Components/Icon";
import icon from "./icon.module.scss";

const Icon: FC<Icon> = ({ size, name, solid, padding }) => {
	return (
		<div className={icon.icon}>
			{solid ? (
				<i
					className={`bx bxs-${name} ${icon[size + "Icon"]} ${
						!padding && icon.unPad
					}`}
				></i>
			) : (
				<i
					className={`bx bx-${name} ${icon[size + "Icon"]} ${
						!padding && icon.unPad
					}`}
				></i>
			)}
		</div>
	);
};

export { Icon };
