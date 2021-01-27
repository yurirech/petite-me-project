import styles from './select-menu.module.scss';

interface SelectMenu {
  name: string,
  options: []
}

const SelectMenu = ({ name, options }) => {
	return (
		<>
			<select name={name} id={name} className={styles.select}>
				{options.map((option: string, i: number) => (
					<option key={i} value={i}>
						{option}
					</option>
				))}
			</select>
		</>
	);
};

export default SelectMenu;
