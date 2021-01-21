import { useEffect, useState } from "react";
import Image from 'next/image';3
// import {v4 asuuid} from 'react-uuid';

import styles from "./index.module.scss";
import uStyles from "../../../styles/utils.module.scss";

import DropdownIcon from "../../../public/icon/arrow_drop_down_24px.svg";
import CollectionItem from "../../../components/collection-item/collection-item";
import DropdownMenu from "../../../components/dropdown-menu/dropdown-menu";

import {getAllCollectionsIds, getCategoryData} from '../../../lib/categories';

const Category = ({categoryData}) => {
	const [title, setTitle] = useState(categoryData.category);
	
	useEffect(() => {
		if(categoryData.category !== 'new-arrivals') {
			setTitle(categoryData.category);
		} 
		setTitle(categoryData.category.split('-').join(' '));
	}, [categoryData.category])

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
						{categoryData.items.map((item, i) => (
							<CollectionItem
								key={i}
								title={item.title}
								image="/img/model-1.jpg"
								price={item.price}
								numberOfColors={5}
								inStock={item.inSotck}
								isNew={item.isNew}
								link={`${categoryData.category}/${i}`}
							/>
						))}
					</div>
				</main>
			</div>
		</div>
	);
};

export default Category;

export async function getStaticPaths() {
	try {
		const paths = await getAllCollectionsIds();
		return {
			paths,
			fallback: false
		}
	} catch (err) {
		console.log(err);
	}
}

export async function getStaticProps({params, items}) {
  try {
		const categoryData = await getCategoryData(params.category, items)
    return {
      props: {
        categoryData
      }
  }
  } catch (err) {
    console.log(err)
  }
}