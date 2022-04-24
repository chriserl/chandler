import Link from "next/link";
import { FC } from "react";
import nav from "./navigation.module.scss";
import "animate.css";
import {
	LinksData,
	MobileNavState,
} from "../../../utils/interfaces/Components/Navigation";
import { NavTheme } from "../../../utils/interfaces/Components/Navigation";
import { useState } from "react";
import { IconButton } from "../../Interactive/Button/Button";
import AlertMessage from "../AlertMessage/AlertMessage";

const TabLinks: FC<LinksData> = ({ links }) => {
	return (
		<ul className={`caption-2 ${nav.tabLinks}`}>
			{links
				.filter((linkItem) => linkItem !== "donate")
				.map((tabLink) => (
					<li className={nav.navItem} key={tabLink}>
						<a href={`/${tabLink}`}>{tabLink}</a>
					</li>
				))}
		</ul>
	);
};

const MobileLinks: FC<MobileNavState> = ({ open, links }) => {
	return (
		<ul
			className={` ${nav.mobileLinks} ${
				!open && nav.mobileNavClosed
			} caption-2`}
		>
			{links.map((mobileLink) => (
				<li className={nav.navItem} key={mobileLink}>
					<a
						href={`/${mobileLink}`}
						className={`animate__animated animate__fadeInDown animate__faster ${nav.navLink}`}
					>
						{mobileLink}
					</a>
				</li>
			))}
		</ul>
	);
};

const Navigation: FC<NavTheme> = ({ theme }) => {
	let [mobileOpen, setMobileOpen] = useState(() => false);
	const links: string[] = ["messages", "meetings", "who we are", "donate"];

	const toggleMobileState = () => {
		setMobileOpen(() => (mobileOpen ? false : true));
	};

	return (
		<nav className={`${nav.nav} ${theme && nav[theme]}`}>
			<div className={nav.mainContainer}>
				<div className={nav.navLeft}>
					<Link href="/">
						<a className={`${nav.brand} body-bold`}>iOS</a>
					</Link>
					<TabLinks links={links} />
				</div>
				<div className={nav.navRight}>
					<div className={nav.toggleBtn}>
						<IconButton
							icon={mobileOpen ? "x" : "dots-vertical-rounded"}
							weight="solid"
							iconColor={theme === "dark" ? "gray" : "black"}
							iconSize="medium"
							color="gray"
							label=""
							size="body"
							clickFunction={toggleMobileState}
						/>
					</div>
					<div className={nav.supportLink}>
						<Link href="/">
							<a className="caption-2">Donate</a>
						</Link>
					</div>
				</div>
			</div>
			<MobileLinks open={mobileOpen} links={links} />
			<AlertMessage
				message="This website is still under construction. Features and links may not work as intended"
				visibilityDuration={5500}
			/>
		</nav>
	);
};

export default Navigation;
