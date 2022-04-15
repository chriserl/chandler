import type { FC } from "react";
import headOne from "./headerone.module.scss";
import { Link } from "../../Interactive/Link/Link";

const HeaderOne: FC = () => {
	return (
		<div className={headOne.headOne}>
			<p className={`${headOne.title} title-2`}>Who are we.</p>
			<p className={`${headOne.description} heading-4`}>
				Mandarin can't participate omni lam <br /> querios labrinth tenament
				croissant.
			</p>
			<Link
				label="Contacts"
				url="/"
				icon="chevron-right"
				size="body"
				iconSize="medium"
			/>
		</div>
	);
};

export default HeaderOne;
