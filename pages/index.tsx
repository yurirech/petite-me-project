import Head from "next/head";
import Image from "next/image";
import Button from "../components/button/button";
import Footer from "../components/footer/footer";
import MenuBar from "../components/menu-bar/menu-bar";
import Instagram from "../public/icon/instagram-negative.svg";
import styles from "../styles/home.module.scss";
import uStyles from "../styles/utils.module.scss";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Petite Me</title>
				{/* <link rel="icon" href="/favicon.ico" /> TODO: CREATE ICO */}
			</Head>

			<main>
				<section
					className={`${styles.infoDisplay} ${styles.infoDisplayDesktop}`}
				>
					<small>Free delivery for purchases above 50 all over Europe</small>
				</section>
				<section className={`${styles.hero}`}>
					<div className={uStyles.overlay} />
					<div className={styles.imageHolder}>
						<Image src="/img/model-1.jpg" layout="fill" objectFit="cover" />
					</div>
					<div className={`${styles.desktopHero}`}>
						<div className={styles.gridContainer}>
							<div className={styles.imageHolder1}>
								<Image
									src="/img/clothing-2.jpg"
									width={326}
									height={353.5}
									layout="responsive"
									objectFit="cover"
								/>
							</div>
							<div className={styles.imageHolder2}>
								<Image
									src="/img/clothing-1.jpg"
									layout="fill"
									objectFit="cover"
								/>
							</div>
							<div className={styles.imageHolder3}>
								<Image src="/img/model-2.jpg" layout="fill" objectFit="cover" />
							</div>
						</div>
					</div>
					<div className={styles.title}>
						<h1>Choose Petite me</h1>
						<div className={styles.button}>
							<Button title="Start shopping now!" backgroundColor="light" />
						</div>
					</div>
				</section>
				<section className={styles.infoDisplay}>
					<small>Free delivery for purchases above 50</small>
				</section>

				<div className={uStyles.container}>
					<section className={styles.whoAreWe}>
						<h1>Who are we?</h1>
						<p>
							Far far away, behind the word mountains, far from the countries
							Vokalia and Consonantia, there live the blind texts.
							<br />
							<br />
							Separated they live in Bookmarksgrove right at the coast of the
							Semantics, a large language ocean. A small river named Duden flows
							by their place and supplies it with the necessary regelialia.
						</p>

						<div
							className={`${styles.whoAreWeImage1} ${styles.whoAreWeImages}`}
						>
							<div>
								<Image
									src="/img/who-are-we1.jpg"
									layout="fill"
									objectFit="cover"
								/>
							</div>
						</div>

						<div
							className={`${styles.whoAreWeImage2} ${styles.whoAreWeImages}`}
						>
							<div>
								<Image
									src="/img/who-are-we2.jpg"
									layout="fill"
									objectFit="cover"
								/>
							</div>
						</div>

						<div
							className={`${styles.whoAreWeImage3} ${styles.whoAreWeImages}`}
						>
							<div>
								<Image
									src="/img/who-are-we3.jpg"
									layout="fill"
									objectFit="cover"
									objectPosition="0 30%"
								/>
							</div>
						</div>
					</section>
				</div>

				<section className={styles.instagram}>
					<div className={uStyles.container}>
						<h1>Check out our #Instagram</h1>
						<div className={styles.imageHolder}>
							<Image
								src="/img/instapic.jpg"
								width={325}
								height={495}
								layout="responsive"
							/>
						</div>
						<div className={styles.button}>
							<span>
								<Instagram width={91} height={91} />
								<p>@thepetiteme</p>
							</span>
							<a href="https://www.instagram.com/thepetite.me/" target="_blank">
								<Button title="Follow us!" backgroundColor="white" />
							</a>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
