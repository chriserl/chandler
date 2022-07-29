import type { NextPage } from "next";
import Head from "next/head";
import msgStyles from "./messages.module.scss";
import Navigation from "../../components/Widgets/Navigation/Navigation";
import MessagesHeader from "./MessagesHeader";

const Messages: NextPage = () => {
	return (
		<div className={msgStyles.index}>
			<Head>
				<title>Messages</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<main className={msgStyles.messages}>
				<Navigation />

				<MessagesHeader />
			</main>
		</div>
	);
};

export default Messages;
