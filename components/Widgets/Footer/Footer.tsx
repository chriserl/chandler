import { FC } from "react";
import { Link } from "../../Interactive/Link/Link";
import footer from "./footer.module.scss";

const Footer: FC = () => {
	const socialLinks = ["Instagram", "Facebook", "WhatsApp"];
	const podLinks = ["Spotify", "Podbean", "Apple Podcasts"];
	const orgLinks = ["Who are we", "Projects"];

	return (
		<div className={footer.footer}>
			<div className={footer.main}>
				<div className={`${footer.socials}`}>
					{socialLinks.map((socialLink) => (
						<div className={footer.link} key={socialLink}>
							<Link
								label={socialLink}
								url={`/${socialLink}`}
								size="caption-3"
								icon="link-external"
								iconSize="small"
							/>
						</div>
					))}
				</div>
				<div className={footer.podcasts}>
					{podLinks.map((podLink) => (
						<div className={footer.link} key={podLink}>
							<Link
								label={podLink}
								url={`/${podLink}`}
								size="caption-3"
								icon="link-external"
								iconSize="small"
							/>
						</div>
					))}
				</div>
				<div className={footer.org}>
					{orgLinks.map((orgLink) => (
						<div className={footer.link} key={orgLink}>
							<Link
								label={orgLink}
								url={`/${orgLink}`}
								size="caption-3"
								icon="link-external"
								iconSize="small"
							/>
						</div>
					))}
				</div>
			</div>
			<div className={`caption-3 ${footer.copyright}`}>
				<p className={footer.designer}>
					Designed and built by
					<a href="/merc" className={footer.link}>
						Montara Studio
					</a>
				</p>
				<p className={footer.copy}>Copyright &copy; Youth Network 2022</p>
			</div>
		</div>
	);
};

export default Footer;
