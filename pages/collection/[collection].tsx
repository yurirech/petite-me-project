import { useRouter } from "next/dist/client/router";

import styles from "./[collection].module.scss";
import uStyles from "../../styles/utils.module.scss";

import DropdownIcon from "../../public/icon/arrow_drop_down_24px.svg";
import CollectionItem from "../../components/collection-item/collection-item";
import { useEffect, useState } from "react";
import DropdownMenu from "../../components/dropdown-menu/dropdown-menu";

const Collection = () => {
	const router: any = useRouter();
	const [title, setTitle] = useState('');

	useEffect(() => {
		if(router.query.collection !== undefined) {
			setTitle(router.query.collection.split('-').join(' '));
		}
	}, [router])

	return (
		<div className={styles.collection}>
			<div className={uStyles.container}>
				<header>
					<h2>{title}</h2>
					<section className={styles.filters}>
						{/* TODO: CHANGE ICON FILL IN CSS */}
						<small>
							FILTER <DropdownIcon width={8} height={8} fill="black" />
						{/* <DropdownMenu>
							<a>Filter</a>
							<a>Filter</a>
							<a>Filter</a>
							<a>Filter</a>
							<a>Filter</a>
						</DropdownMenu> */}
						</small>
						<small>
							ORDER <DropdownIcon width={8} height={8} fill="black" />
						</small>
					</section>
				</header>
				<main>
					<div className={styles.collectionItems}>
						{tempCollectionData.map((item, i) => (
							<CollectionItem
								key={i}
								title={item.title}
								image={item.image}
								price={item.price}
								numberOfColors={item.numberOfColors}
								inStock={item.inSotck}
							/>
						))}
					</div>
				</main>
			</div>
		</div>
	);
};

export default Collection;

const tempCollectionData = [
	{
		title: "Super cool",
		image: "/img/model-1.jpg",
		price: "50.99",
		numberOfColors: 5,
		inSotck: 6,
	},
	{
		title: "Best dress in the world",
		image: "/img/item-thumbnail.jpg",
		price: "15.99",
		numberOfColors: 1,
		inSotck: 0,
	},
	{
		title: "Best jeans in the world",
		image: "/img/model-2.jpg",
		price: "70.99",
		numberOfColors: 3,
		inSotck: 2,
	},
	{
		title: "Super cool",
		image: "/img/model-1.jpg",
		price: "50.99",
		numberOfColors: 5,
		inSotck: 2,
	},
	{
		title: "Best dress in the world",
		image: "/img/item-thumbnail.jpg",
		price: "15.99",
		numberOfColors: 1,
		inSotck: 2,
	},
	{
		title: "Best jeans in the world",
		image: "/img/model-2.jpg",
		price: "70.99",
		numberOfColors: 3,
		inSotck: 2,
	},
];
