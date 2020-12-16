import Image from "next/image";

import styles from "./collection-item.module.scss";

const CollectionItem = () => {
	return (
		<>
			<div className={styles.collectionItem}>
				<div className={styles.itemPhoto}>
					<Image
						src="/img/model-2.jpg"
						objectFit="cover"
						width={327}
						height={489}
						layout="responsive"
					/>
				</div>
				<label>Very nice dress omg</label>
				<p>
					<strong>€20.99</strong>
				</p>
				<small>10 colors</small>
			</div>
		</>
	);
};

export default CollectionItem;
