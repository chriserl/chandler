import { FC } from "react";
import { Link } from "../../Interactive/Link/Link";
import footer from "./footer.module.scss";

const Footer: FC = () => {
	return (
		<div className={footer.footer}>
			<div className={footer.main}>
				<div className={`${footer.socials}`}>
					{["Instagram", "Facebook", "WhatsApp"].map((socialLink) => (
						<div className={footer.link} key={socialLink}>
							<Link
								label={socialLink}
								url="/"
								size="caption-3"
								icon="link-external"
								iconSize="small"
							/>
						</div>
					))}
				</div>
				<div className={footer.podcasts}>
					{["Spotify", "Podbean", "Apple Podcasts"].map((podLink) => (
						<div className={footer.link} key={podLink}>
							<Link
								label={podLink}
								url="/"
								size="caption-3"
								icon="link-external"
								iconSize="small"
							/>
						</div>
					))}
				</div>
				<div className={footer.org}>
					{["Who are we", "Projects"].map((orgLink) => (
						<div className={footer.link} key={orgLink}>
							<Link
								label={orgLink}
								url="/"
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
					<a href="/" className={footer.link}>
						Mercurial Studios
					</a>
				</p>
				<p className={footer.copy}>Copyright &copy; Youth Network 2022</p>
			</div>
		</div>
	);
};

export default Footer;
