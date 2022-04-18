import { FC } from "react";
import footer from "./footer.module.scss";

const Footer: FC = () => {
	return (
		<div className={footer.footer}>
			<div className={footer.main}>
				<div className={`${footer.socials} caption-2`}>
					<a href="/" className={footer.social}>
						Instagram
					</a>
					<a href="/" className={footer.social}>
						Facebook
					</a>
					<a href="/" className={footer.social}>
						WhatsApp
					</a>
				</div>
				<div className={`${footer.podcasts} caption-2`}>
					<a href="/" className={footer.podcast}>
						Spotify
					</a>
					<a href="/" className={footer.podcast}>
						Podbean
					</a>{" "}
					<a href="/" className={footer.podcast}>
						Apple Podcasts
					</a>
				</div>
				<div className={`${footer.org} caption-2`}>
					<a href="/" className={footer.org}>
						Who are we
					</a>
					<a href="/" className={footer.org}>
						Ongoing Projects
					</a>
				</div>
			</div>
			<div className={`${footer.copyright} caption-3`}>
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
