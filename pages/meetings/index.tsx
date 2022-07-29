import type { NextPage } from "next";
import Head from "next/head";
import meetStyles from "./meetings.module.scss";
import Navigation from "../../components/Widgets/Navigation/Navigation";
import HeaderTwo from "../../components/Slides/HeaderTwo/HeaderTwo";
import { HeaderData } from "../../utils/interfaces/Components/Slides";
import SlidesContainer from "../../components/Layout/SlidesContainer/SlidesContainer";
import SlideSeven from "../../components/Slides/SlideSeven/SlideSeven";
import Footer from "../../components/Widgets/Footer/Footer";

const Meetings: NextPage = () => {
	const headerData: HeaderData = {
		caption: "This Saturday, 20:00UTC",
		title: "Engine Room.",
		description: "Perception & Discernment",
		background: "",
	};

	return (
		<div className={meetStyles.index}>
			<Head>
				<title>Meetings</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" href="/images/generic/favicon.ico" />
			</Head>
			<main className={meetStyles.meetings}>
				<Navigation theme="dark" />
				<HeaderTwo {...headerData} />
				<SlidesContainer shade="gray" flow="column">
					<SlideSeven {...headerData} />
					<SlidesContainer shade="gray" flow="row">
						<SlideSeven {...headerData} />
						<SlideSeven {...headerData} />
					</SlidesContainer>
					<SlideSeven {...headerData} />
					<SlideSeven {...headerData} />
					<Footer />
				</SlidesContainer>
			</main>
		</div>
	);
};

export default Meetings;
