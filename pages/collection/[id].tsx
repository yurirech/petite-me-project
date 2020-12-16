import styles from "./[id].module.scss";
import uStyles from "../../styles/utils.module.scss";

import DropdownIcon from "../../public/icon/arrow_drop_down_24px.svg";
import CollectionItem from "../../components/collection-item/collection-item";

const Collection = () => {
	return (
		<div className={uStyles.container}>
			<header>
				<h2>Dresses</h2>
				<section className={styles.filters}>
					{/* TODO: CHANGE ICON FILL IN CSS */}
					<small>
						FILTER <DropdownIcon width={8} height={8} fill="black" />{" "}
					</small>
					<small>
						ORDER <DropdownIcon width={8} height={8} fill="black" />
					</small>
				</section>
			</header>
      <main>
        <CollectionItem />
      </main>
		</div>
	);
};

export default Collection;
