import { FC } from "react";
import { IconButton, TextButton } from "../../Interactive/Button/Button";
import cc from "./contactcard.module.scss";

const ContactCard: FC = () => {
	return (
		<div className={cc.cc}>
			<p className={`${cc.contact} heading-4`}>+233 509 430 998</p>
			<hr />
			<div className={cc.details}>
				<TextButton
					size="caption-1"
					label="Copy"
					weight="transparent"
					color="gray"
				/>
				<IconButton
					icon="chevron-right"
					weight="transparent"
					size="caption-1"
					iconSize="medium"
					iconColor="primary"
					label="Call"
					color="primary"
				/>
			</div>
		</div>
	);
};

export default ContactCard;
