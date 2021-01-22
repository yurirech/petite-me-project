import { useState } from "react";
import styles from "./items-counter.module.scss";

const ItemsCounter = ({ value = 1, itemsInStock = 5 }) => {
	const [numberOfItems, setNumberOfItems] = useState(value);

	return (
		<div className={styles.itemsCounter}>
			<button
				type="button"
				onClick={() => {
					if (numberOfItems < itemsInStock) setNumberOfItems(numberOfItems + 1);
				}}
			>
				+
			</button>
			<input type="number" readOnly  value={numberOfItems} />
			<button
				type="button"
				onClick={() => {
					if (numberOfItems > 1) {
						setNumberOfItems(numberOfItems - 1);
					}
				}}
			>
				-
			</button>
		</div>
	);
};

export default ItemsCounter;
