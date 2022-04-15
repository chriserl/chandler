import type { FC } from "react";
import { Icon } from "../../../utils/interfaces/Components/Icon";
import icon from "./icon.module.scss";

const Icon: FC<Icon> = ({ name, padding, weight, size, color }) => {
	return (
		<div className={icon.icon}>
			{weight === "solid" && (
				<i
					className={`bx bxs-${name} ${icon[size + "Icon"]} ${
						color && icon[color]
					} ${!padding && icon.unPad}`}
				></i>
			)}

			{weight === "line" && (
				<i
					className={`bx bx-${name} ${icon[size + "Icon"]} ${
						color && icon[color]
					} ${!padding && icon.unPad}`}
				></i>
			)}
		</div>
	);
};

export { Icon };
