import Link from "next/link";
import { FC } from "react";
import nav from "./navigation.module.scss";
import { MobileNavState } from "../../../utils/interfaces/Components/Navigation";
import { NavTheme } from "../../../utils/interfaces/Components/Navigation";
import { useState } from "react";
import { IconButton } from "../../Interactive/Button/Button";

const TabLinks: FC = () => {
	return (
		<ul className={nav.tabLinks}>
			<li className={nav.navItem}>
				<a href="/" className="caption-2">
					Messages
				</a>
			</li>
			<li className={nav.navItem}>
				<a href="/" className="caption-2">
					Meetings
				</a>
			</li>
			<li className={nav.navItem}>
				<a href="/" className="caption-2">
					Who we are
				</a>
			</li>
		</ul>
	);
};

const MobileLinks: FC<MobileNavState> = ({ open }) => {
	return (
		<ul className={`${nav.mobileLinks} ${!open && nav.mobileNavClosed}`}>
			<li className={nav.navItem}>
				<a href="/" className={`${nav.navLink} caption-2`}>
					Messages
				</a>
			</li>
			<li className={nav.navItem}>
				<a href="/" className={`${nav.navLink} caption-2`}>
					Meetings
				</a>
			</li>
			<li className={nav.navItem}>
				<a href="/" className={`${nav.navLink} caption-2`}>
					Who we are
				</a>
			</li>
			<li className={nav.navItem}>
				<Link href="/">
					<a className={`${nav.navLink} caption-2`}>Donate</a>
				</Link>
			</li>
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
						<a className={`${nav.brand} caption-1-bold`}>Chandler</a>
					</Link>
					<TabLinks />
				</div>
				<div className={nav.navRight}>
					<div className={nav.toggleBtn}>
						<IconButton
							icon={mobileOpen ? "x" : "dots-vertical-rounded"}
							weight="solid"
							color="gray"
							iconSize="medium"
							label=""
							size="body"
							clickFunction={toggleMobileState}
						/>
					</div>
					<div className={nav.supportLink}>
						<Link href="/">
							<a className="caption-2">Support Us</a>
						</Link>
					</div>
				</div>
			</div>
			<MobileLinks open={mobileOpen} />
		</nav>
	);
};

export default Navigation;
