import type { FC } from "react";
import styles from "./messages.module.scss";

const MessagesHeader: FC = () => {
	return (
		<div className={styles.slide}>
			<p className="title-3">Messages.</p>
			<p className="heading-4">Available on your favorite podcast client</p>
			<div></div>
		</div>
	);
};

export default MessagesHeader;
