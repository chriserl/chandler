import type { FC } from "react";
import { Link } from "../../../utils/interfaces/Components/Link";
import { Icon } from "../Icon/Icon";
import link from "./link.module.scss";

const Link: FC<Link> = ({ label, url, icon, size, iconSize }) => (
	<div className={link.link}>
		<a href={url} className={size}>
			{label}
		</a>
		{icon && (
			<Icon
				name={icon}
				padding={false}
				size={iconSize}
				weight="line"
				color="primary"
			/>
		)}
	</div>
);

export { Link };
