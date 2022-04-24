import type { NextPage } from "next";
import Head from "next/head";
import index from "./index.module.scss";
import Navigation from "../components/Widgets/Navigation/Navigation";
import {
	DefaultSlideData,
	SlideOneData,
	SlideSixData,
	SlideTwoData,
} from "../utils/interfaces/Components/Slides";
import HeaderTwo from "../components/Slides/HeaderTwo/HeaderTwo";
import SlidesContainer from "../components/Layout/SlidesContainer/SlidesContainer";
import SlideSix from "../components/Slides/SlideSix/SlideSix";
import SlideTwo from "../components/Slides/SlideTwo/SlideTwo";
import Footer from "../components/Widgets/Footer/Footer";
import SlideOne from "../components/Slides/SlideOne/SlideOne";
import AlertMessage from "../components/Widgets/AlertMessage/AlertMessage";

const Home: NextPage = () => {
	const headerData: DefaultSlideData = {
		caption: "This Saturday, 20:00UTC",
		title: "The Lamp Service",
		description: "Perception & Discernment",
	};
	const quoteData: SlideSixData = {
		iconData: {
			name: "bookmark",
			padding: true,
			weight: "solid",
			size: "xxlarge",
			color: "black",
		},
		title: "Verse of the day",
		description: `So if I, the Lord and the Teacher, washed your feet, you ought to wash one another's feet as well`,
		extra: "John 13:14 [AMP]",
	};
	const messagesData: SlideTwoData = {
		shade: "light",
		textPosition: "textLeft",
		image: "/images/home/s201.jpg",
		title: "Messages.",
		description:
			"Listen to recorded messages \n from our meetings right here \n or on your fave podcast app.",
		linkData: {
			label: "Listen now",
			url: "/",
			size: "body",
			icon: "chevron-right",
			iconSize: "medium",
		},
	};
	const meetingsData: SlideTwoData = {
		shade: "light",
		textPosition: "textRight",
		image: "/images/home/s202.jpg",
		title: "Meetings.",
		description: "We'll be happy to see you \n the next time we meet",
		linkData: {
			label: "All meetings",
			url: "/",
			size: "body",
			icon: "chevron-right",
			iconSize: "medium",
		},
	};
	const aboutData: SlideOneData = {
		shade: "light",
		textPosition: "textBottom",
		image: "/images/home/s101.jpg",
		title: "Who we are.",
		description: "Learn more about us, our \n vision and our mission",
		linkData: {
			label: "About us",
			url: "/",
			size: "body",
			icon: "chevron-right",
			iconSize: "medium",
		},
	};

	return (
		<div className={index.index}>
			<Head>
				<title>Youth Network Global</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<main>
				<Navigation theme="dark" />

				<HeaderTwo
					caption={headerData.caption}
					title={headerData.title}
					description={headerData.description}
				/>
				<SlidesContainer shade="gray" flow="column">
					<SlideSix
						iconData={quoteData.iconData}
						title={quoteData.title}
						description={quoteData.description}
						extra={quoteData.extra}
					/>
					<SlideTwo
						shade={messagesData.shade}
						textPosition={messagesData.textPosition}
						image={messagesData.image}
						title={messagesData.title}
						description={messagesData.description}
						linkData={messagesData.linkData}
					/>
					<SlideTwo
						shade={meetingsData.shade}
						textPosition={meetingsData.textPosition}
						image={meetingsData.image}
						title={meetingsData.title}
						description={meetingsData.description}
						linkData={meetingsData.linkData}
					/>
					<SlideOne
						shade={aboutData.shade}
						textPosition={aboutData.textPosition}
						image={aboutData.image}
						title={aboutData.title}
						description={aboutData.description}
						linkData={aboutData.linkData}
					/>
					<Footer />
				</SlidesContainer>
			</main>
		</div>
	);
};

export default Home;
