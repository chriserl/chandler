import type { NextPage } from "next";
import Head from "next/head";
import styles from "./whoweare.module.scss";
import Navigation from "../../components/Widgets/Navigation/Navigation";
import SlideEight from "../../components/Slides/SlideEight/SlideEight";
import { SlideOneData } from "../../utils/interfaces/Components/Slides";
import SlidesContainer from "../../components/Layout/SlidesContainer/SlidesContainer";

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

	return (
		<div className={styles.index}>
			<Head>
				<title>Who We Are</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<main className={styles.whoweare}>
				<Navigation theme="dark" />
				<SlideEight {...headerData} />
			</main>
		</div>
	);
};

export default WhoWeAre;
