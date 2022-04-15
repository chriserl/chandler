import type { FC } from "react";
import GenericSlide from "../GenericSlide/GenericSlide";
import { Icon } from "../../Interactive/Icon/Icon";
import qt from "./quote.module.scss";

const Quote: FC = () => {
	return (
		<GenericSlide shade="light">
			<div className={qt.qt}>
				<Icon name="bookmark" size="large" padding={false} solid={true} />
				<p className={`heading-4 ${qt["title"]}`}>Verse of the day</p>
				<div className={qt["quote"]}>
					<p className={`title-1 ${qt["quoteText"]}`}>
						"Blessed are they that mourn: for they shall be comforted"
					</p>
					<p className={`caption-2 ${qt["version"]}`}>
						Matthew 4:3 {`[King James Version]`}
					</p>
				</div>
			</div>
		</GenericSlide>
	);
};

export default Quote;
