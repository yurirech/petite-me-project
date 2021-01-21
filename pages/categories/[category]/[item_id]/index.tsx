import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./index.module.scss";
import uStyles from "../../../../styles/utils.module.scss";

import { getCategoryData } from "../../../../lib/categories";
import DropdownMenu from "../../../../components/dropdown-menu/dropdown-menu";

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

const Item = () => {
	const router = useRouter();
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
							<SwiperSlide>
								<div className={styles.swiperImgHolder}>
									<Image
										src="/img/model-1.jpg"
										layout="responsive"
										height="200"
										width="150"
										objectFit="cover"
									/>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className={styles.imgHolder}>
									<Image
										src="/img/model-1.jpg"
										layout="responsive"
										height="200"
										width="150"
										objectFit="cover"
									/>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className={styles.imgHolder}>
									<Image
										src="/img/model-1.jpg"
										layout="responsive"
										height="200"
										width="150"
										objectFit="cover"
									/>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className={styles.imgHolder}>
									<Image
										src="/img/model-1.jpg"
										layout="responsive"
										height="200"
										width="150"
										objectFit="cover"
									/>
								</div>
							</SwiperSlide>
						</Swiper>
					</section>
					<section className={styles.colors}>
						<span className={styles.selected}></span>
						<span></span>
						<span></span>
						<span></span>
					</section>
					<section className={styles.info}>
						<p>awesome dress</p>
						<small>
							<strong>89.90</strong>
						</small>
						<a>Help with sizes</a>
						<form>
							<select name="sizes" id="sizes">
								<option value="x-small">XS</option>
								<option value="small">S</option>
								<option value="medium">M</option>
								<option value="large">L</option>
								<option value="x-large">XL</option>
							</select>
							<div className={styles.numberOfItems}>number of items</div>
							<button>wishlist</button>
							<button>add to shopping bag</button>
						</form>
						<section className={styles.description}>desc</section>
						<section className={styles.furtherInfo}>further</section>
					</section>

					<p>{router.query.item_id}</p>
				</div>
			</main>
		</>
	);
};

export default Item;
