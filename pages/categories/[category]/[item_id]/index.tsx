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
import { useState } from "react";

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
		color: "#39BAE6",
		photos: ["/img/model-1.jpg", "/img/model-1.jpg", "/img/model-1.jpg"],
	},
];

const Item = () => {
	const router = useRouter();
	const [selectColor, setSelectColor] = useState(colors[0]);

	return (
		<>
			<Head>
				<title>Clothing Item</title>
			</Head>
			<main className={styles.main}>
				<div className={uStyles.container}>
					<section className={styles.swiper}>
						<Swiper
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
					</section>
					<section className={styles.colors}>
						{colors.map((color) => (
							<span
								key={color}
								style={{ backgroundColor: color }}
								className={color === selectColor ? styles.selected : null}
								onClick={() => setSelectColor(color)}
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
						<section className={styles.description}>
							<h3>Description</h3>
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit.
								Accusamus ullam ipsum ratione quasi doloremque corporis
								explicabo a ut nobis quibusdam!
							</p>
						</section>
						<section className={styles.furtherInfo}>
							<p>FURTHER INFO</p>
							<small>
								Lorem ipsum dolor sit, amet consectetur adipisicing.
							</small>
						</section>
					</section>
				</div>
			</main>
		</>
	);
};

export default Item;
