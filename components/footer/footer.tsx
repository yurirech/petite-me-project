import Link from "next/link";

import styles from "./footer.module.scss";
import uStyles from "../../styles/utils.module.scss";

import Facebook from "../../public/icon/facebook-negative.svg";
import LinkedIn from "../../public/icon/linkedin-negative.svg";
import Instagram from "../../public/icon/instagram-negative.svg";

const Footer = () => {
	return (
		<>
			<div className={uStyles.container}>
				<section className={styles.footer}>
					<h4>Petite me</h4>
					<section className={styles.menuLinks}>
            <Link href='#'><a>About us</a></Link>
            <Link href='#'><a>Size Guide</a></Link>
            <Link href='#'><a>FAQ</a></Link>
            <Link href='#'><a>Terms</a></Link>
            <Link href='#'><a>Privacy Policy</a></Link>
            <Link href='#'><a>Contact Us</a></Link>
        </section>
					<div className={styles.social}>
						<Facebook width={23} height={23} />
						<Instagram width={23} height={23} />
						<LinkedIn width={23} height={23} />
					</div>
					<p>
						45 charnwood Street <br /> Dublin 15 <br /> Dublin, Ireland
					</p>
					<small>petite.me copyrighted 2020. All rights reserved </small>
				</section>
			</div>
		</>
	);
};

export default Footer;
