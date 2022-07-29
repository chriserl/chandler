import { FC, useState, useEffect } from "react";
import alertmsg from "./alertmessage.module.scss";
import "animate.css";
import { AlertMessageData } from "../../../utils/interfaces/Components/Slides";

const AlertMessage: FC<AlertMessageData> = ({
	theme,
	message,
	visibilityDuration,
}) => {
	const [visibility, setVisibility] = useState(() => true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setVisibility(() => false);
		}, visibilityDuration);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div
			className={`animate__animated  animate__faster ${
				visibility ? "animate__fadeInDown" : "animate__fadeOut"
			} ${alertmsg.alertmsg} ${theme ? alertmsg.dark : alertmsg.light}`}
		>
			<p className={`${alertmsg.msgText} caption-3-bold`}>{message}</p>
		</div>
	);
};

export default AlertMessage;
