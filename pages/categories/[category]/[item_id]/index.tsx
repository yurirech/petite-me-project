import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./index.module.scss";
import uStyles from "../../../../styles/utils.module.scss";

import { getCategoryData } from "../../../../lib/categories";
import DropdownMenu from "../../../../components/dropdown-menu/dropdown-menu";

import SelectMenu from "../../../../components/select-menu/select-menu";
import ItemsCounter from "../../../../components/items-counter/items-counter";
import Button from "../../../../components/button/button";
import Favorite from "../../../../public/icon/favorite-border.svg";
import { useEffect, useState } from "react";

// export async function getStaticProps({params, items}) {
//   try {
// 		const categoryData = await getCategoryData(params.category, items)
//     return {
//       props: {
//         categoryData
//       }
//   }
//   } catch (err) {
//     console.log(err)
//   }
// }

const colors = ["#AFC9D2", "#D17E6E", "#39BAE6"];
const photos = [
	"/img/clothing-2.jpg",
	"/img/who-are-we1.jpg",
	"/img/model-1.jpg",
	"/img/instapic.jpg",
];

const test = {
	"#AFC9D2": [
		"/img/clothing-2.jpg",
		"/img/clothing-2.jpg",
		"/img/clothing-2.jpg",
	],
	"#D17E6E": [
		"/img/who-are-we1.jpg",
		"/img/who-are-we1.jpg",
		"/img/who-are-we1.jpg",
	],
	"#4de639": ["/img/model-1.jpg", "/img/model-1.jpg", "/img/model-1.jpg"],
};

const photosT = [
	{
		color: "#AFC9D2",
		photos: [
			"/img/clothing-2.jpg",
			"/img/clothing-2.jpg",
			"/img/clothing-2.jpg",
		],
	},
	{
		color: "#D17E6E",
		photos: [
			"/img/who-are-we1.jpg",
			"/img/who-are-we1.jpg",
			"/img/who-are-we1.jpg",
		],
	},
	{
		color: "#4de639",
		photos: ["/img/model-1.jpg", "/img/model-1.jpg", "/img/model-1.jpg"],
	},
];

// const a = () => {
// 	const currentColor = "#4de639";
// 	let ui = [];
// 	const colors = photosT.map((data) => {
// 		if (currentColor === data.color) {
// 			ui = data.photos;
// 		}
// 		return ui;
// 	});
// 	console.log(colors);
// };

// a();

const Item = () => {
	const router = useRouter();
	const [selectColor, setSelectColor] = useState(colors[0]);
	// const [photoss, setPhotoss] = useState();

	return (
		<>
			<Head>
				<title>Clothing Item</title>
			</Head>
			<main className={styles.main}>
				<div className={`${uStyles.container} ${styles.flex}`}>
					<section className={styles.itemsPhotos}>
						<Swiper
							className={styles.swiper}
							slidesPerView={1}
							onSlideChange={() => console.log("slide change")}
							onSwiper={(swiper) => console.log(swiper)}
						>
							{photos.map((photo) => {
								return (
									<SwiperSlide>
										<div className={styles.swiperImgHolder}>
											<Image
												key={photo}
												src={photo}
												layout="responsive"
												height="200"
												width="150"
												objectFit="cover"
											/>
										</div>
									</SwiperSlide>
								);
							})}
						</Swiper>
						<div className={styles.photosGridDesktop}>
							{photos.map((photo) => {
								return (
									<div className={styles.gridImgHolder}>
										<Image
											key={photo}
											src={photo}
											layout="responsive"
											height="200"
											width="150"
											objectFit="cover"
										/>
									</div>
								);
							})}
						</div>
					</section>
					<section className={`${styles.colors} ${styles.colorsMobile}`}>
						{photosT.map((color) => (
							<span
								key={color.color}
								style={{ backgroundColor: color.color }}
								className={color.color === selectColor ? styles.selected : null}
								onClick={() => {
									console.log(color.color);
									return setSelectColor(color.color);
								}}
							></span>
						))}
					</section>
					<section className={styles.info}>
						<div className={styles.title}>
							<p>awesome dress</p>
							<small>
								<strong>€89.90</strong>
							</small>
						</div>
						<div className={styles.colorsDesktop}>
							<section className={`${styles.colors}`}>
								{colors.map((color) => (
									<span
										key={color}
										style={{ backgroundColor: color }}
										className={color === selectColor ? styles.selected : null}
										onClick={() => setSelectColor(color)}
									></span>
								))}
							</section>
						</div>
						<Link href="/">
							<a>Help with sizes</a>
						</Link>
						<form>
							<div className={styles.layoutContainer}>
								<SelectMenu
									name="sizes"
									options={["Choose size", "XS", "S", "M", "L", "XL"]}
								/>
								<div className={styles.numberOfItems}>
									<ItemsCounter />
								</div>
								<div className={styles.wishlist}>
									<Button type="button">
										<Favorite width="24" height="24" fill="white" />
									</Button>
								</div>
							</div>
							<Button title="Add to shopping bag" />
						</form>
					</section>
					<section className={styles.description}>
						<h3>Description</h3>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Accusamus ullam ipsum ratione quasi doloremque corporis explicabo
							a ut nobis quibusdam!
						</p>
					</section>
					<section className={styles.furtherInfo}>
						<p>FURTHER INFO</p>
						<small>Lorem ipsum dolor sit, amet consectetur adipisicing.</small>
					</section>
				</div>
			</main>
		</>
	);
};

export default Item;
