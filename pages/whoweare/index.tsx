import type { NextPage } from "next";
import Head from "next/head";
import styles from "./whoweare.module.scss";
import Navigation from "../../components/Widgets/Navigation/Navigation";
import SlideEight from "../../components/Slides/SlideEight/SlideEight";
import {
	SlideOneData,
	SlideTwoData,
} from "../../utils/interfaces/Components/Slides";
import SlideNine from "../../components/Slides/SlideNine/SlideNine";
import Footer from "../../components/Widgets/Footer/Footer";

const WhoWeAre: NextPage = () => {
	const headerData: SlideOneData = {
		shade: "light",
		textPosition: "textBottom",
		title: "Who we are.",
		description: "Learn more about us, our \n vision and our mission",
		linkData: {
			label: "Contacts",
			url: "/",
			size: "body",
			icon: "chevron-right",
			iconSize: "medium",
		},
	};

	const visionData: SlideTwoData = {
		shade: "light",
		textPosition: "textLeft",
		caption: "Vision",
		title:
			"Listen to recorded messages \n from our meetings right here \n or on your fave podcast app.",
	};

	const missionData: SlideTwoData = {
		shade: "light",
		textPosition: "textRight",
		caption: "Mission",
		title:
			"Listen to recorded messages \n from our meetings right here \n or on your fave podcast app.",
	};

	return (
		<div className={styles.index}>
			<Head>
				<title>Who We Are</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<main className={styles.whoweare}>
				<Navigation />
				<SlideEight {...headerData} />
				<SlideNine {...visionData} />
				<SlideNine {...missionData} />
				<Footer />
			</main>
		</div>
	);
};

export default WhoWeAre;
