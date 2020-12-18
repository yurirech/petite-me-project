import Image from "next/image";

import styles from "./collection-item.module.scss";

interface CollectionItem {
	title: string;
	image: string;
	price: string;
	numberOfColors: number;
	inStock: number;
}

const CollectionItem = ({
	title,
	image,
	price,
	numberOfColors,
	inStock,
}: CollectionItem) => {
	return (
		<>
			<div className={styles.collectionItem}>
				{inStock < 1 && (
					<div className={styles.outOfStockLayer}>
						<h3>Out of Stock</h3>
						<a>Let me know when available</a>
					</div>
				)}
				<div className={styles.itemPhoto}>
					<div className={styles.sizePanel}>
						<p>Choose a size</p>
						<div className={styles.sizes}>
							<label>XS</label>
							<label>S</label>
							<label>M</label>
							<label>L</label>
							<label>XL</label>
						</div>
					</div>
					<div className={styles.itemPhotoHolder}>
						<Image
							src={image}
							objectFit="cover"
							width={327}
							height={489}
							layout="responsive"
						/>
					</div>
				</div>

				<label>{title}</label>
				<p>
					<strong>€{price}</strong>
				</p>
				<small>
					{numberOfColors} color{numberOfColors > 1 && <span>s</span>}
				</small>
			</div>
		</>
	);
};

export default CollectionItem;
