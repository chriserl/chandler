import { FC } from "react";
import ec from "./execcard.module.scss";

const ExecCard: FC = () => {
	return (
		<div className={ec.ec}>
			<img src="/images/exec.jpg" alt="exec" />
			<div className={`${ec.details} caption-3`}>
				<p className={ec.name}>Theophilus</p>
				<p className={ec.role}>Founder</p>
			</div>
		</div>
	);
};

export default ExecCard;
