import { FC } from "react";
import {
	Detail,
	MeetingDetailsData,
} from "../../../utils/interfaces/Components/MeetingDetails";
import { IconButton } from "../../Interactive/Button/Button";
import details from "./meetingdetails.module.scss";

const Detail: FC<Detail> = ({ value, description }) => {
	return (
		<div className={details.detail}>
			<p className={`capton-1-bold ${details.value}`}>{value}</p>
			<p className={`caption-2 ${details.description}`}>{description}</p>
		</div>
	);
};

const MeetingDetails: FC<MeetingDetailsData> = ({
	detailSet,
	clickFunction,
}) => {
	return (
		<div className={details.meetingDetails}>
			<div className={details.detailsContainer}>
				{detailSet.map((detailItem) => (
					<div className={details.detailSet} key={detailItem.title.titleText}>
						{detailItem.title && (
							<div className={details.title}>
								<p className={`caption-2 ${details.titleText}`}>
									{detailItem.title.titleText}
								</p>
								<p className={`caption-2 ${details.action}`}>
									{detailItem.title.action}
								</p>
							</div>
						)}
						<div className={details.details}>
							{detailItem.details.map((detail) => (
								<Detail
									value={detail.value}
									description={detail.description}
									key={detail.description}
								/>
							))}
						</div>
					</div>
				))}
			</div>
			<IconButton
				label="Back"
				icon="chevron-left"
				iconSize="medium"
				iconColor="white"
				iconPosition="iconLeft"
				weight="transparent"
				color="white"
				size="body"
				clickFunction={clickFunction}
			/>
		</div>
	);
};

export default MeetingDetails;
