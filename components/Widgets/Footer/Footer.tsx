import { FC } from "react";
import footer from "./footer.module.scss";

const Footer: FC = () => {
	return (
		<div className={footer.footer}>
			<div className={footer.main}>
				<div className={`${footer.socials} caption-2`}>
					<a href="/" className={footer.social}>
						Social 1
					</a>
					<a href="/" className={footer.social}>
						Social 1
					</a>
					<a href="/" className={footer.social}>
						Social 1
					</a>
				</div>
				<div className={`${footer.podcasts} caption-2`}>
					<a href="/" className={footer.podcast}>
						Podcast 1
					</a>
					<a href="/" className={footer.podcast}>
						Podcast 1
					</a>
					<a href="/" className={footer.podcast}>
						Podcast 1
					</a>
				</div>
				<div className={`${footer.org} caption-2`}>
					<a href="/" className={footer.org}>
						Org 1
					</a>
					<a href="/" className={footer.org}>
						Org 1
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
