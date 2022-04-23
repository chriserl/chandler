import Link from "next/link";
import { FC } from "react";
import nav from "./navigation.module.scss";
import "animate.css";
import { MobileNavState } from "../../../utils/interfaces/Components/Navigation";
import { NavTheme } from "../../../utils/interfaces/Components/Navigation";
import { useState } from "react";
import { IconButton } from "../../Interactive/Button/Button";

const TabLinks: FC = () => {
	return (
		<ul className={`caption-2 ${nav.tabLinks}`}>
			<li className={nav.navItem}>
				<a href="/">Messages</a>
			</li>
			<li className={nav.navItem}>
				<a href="/">Meetings</a>
			</li>
			<li className={nav.navItem}>
				<a href="/">Who we are</a>
			</li>
		</ul>
	);
};

const MobileLinks: FC<MobileNavState> = ({ open }) => {
	return (
		<ul
			className={` ${nav.mobileLinks} ${
				!open && nav.mobileNavClosed
			} caption-2`}
		>
			{["Messages", "Meetings", "Who are we", "Donate"].map((mobileLink) => (
				<li className={nav.navItem} key={mobileLink}>
					<a
						href="/"
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
					<TabLinks />
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
			<MobileLinks open={mobileOpen} />
		</nav>
	);
};

export default Navigation;
