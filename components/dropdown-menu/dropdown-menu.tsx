import styles from "./dropdown-menu.module.scss";

const DropdownMenu = ({ children }) => {
	return (
		<div className={styles.dropdownMenu}>
			<div className={styles.flexContainer}>
				{children}
			</div>
		</div>
	);
};

export default DropdownMenu;
