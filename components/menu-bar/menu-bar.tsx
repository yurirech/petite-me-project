import Link from "next/link";
import { useState } from "react";

import styles from "./menu-bar.module.scss";
import uStyles from "../../styles/utils.module.scss";

import MenuIcon from "../../public/icon/menu.svg";
import UserIcon from "../../public/icon/person-outline.svg";
import FavoriteIcon from "../../public/icon/favorite-border.svg";
import SearchIcon from "../../public/icon/search.svg";
import CartIcon from "../../public/icon/shopping-cart.svg";

import Input from "../input/input";

const MenuBar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	const handleToggle = () => {
		setToggleMenu(() => !toggleMenu);
	};

	return (
		<>
			<div className={uStyles.container}>
				<menu className={`${styles.menu}`}>
					<form>
						<Input type="text" placeholder="Search" addSuffix={true}>
							<SearchIcon
								width={24}
								height={24}
								className={uStyles.blackIcon}
							/>
						</Input>
					</form>

					<Link href="/">
						<h4 onClick={() => setToggleMenu(false)}>Petite me</h4>
					</Link>
					<MenuIcon
						width={31}
						height={31}
						className={styles.icon}
						onClick={handleToggle}
					/>

					<div className={styles.menuIcons}>
						<Link href="/login">
							<a>
								<UserIcon
									width={28}
									height={28}
									className={uStyles.blackIcon}
								/>
							</a>
						</Link>
						<Link href="/">
							<a>
								<FavoriteIcon
									width={28}
									height={28}
									className={uStyles.blackIcon}
								/>
							</a>
						</Link>
						<Link href="/">
							<a>
								<CartIcon
									width={28}
									height={28}
									className={uStyles.blackIcon}
								/>
							</a>
						</Link>
					</div>
					{toggleMenu ? <div className={`${styles.buttonToggle}`}></div> : null}
				</menu>
				<section className={styles.menuLinks}>
					<Link href="/">
						<a>New items</a>
					</Link>
					<Link href="/">
						<a>Tops</a>
					</Link>
					<Link href="/">
						<a>Trousers</a>
					</Link>
					<Link href="/">
						<a>Underwear</a>
					</Link>
					<Link href="/">
						<a>Scarves</a>
					</Link>
					<Link href="/">
						<a>Dresses</a>
					</Link>
				</section>
			</div>
			{toggleMenu ? (
				<div className={`${styles.menuPanel}`}>
					<h4>Shop</h4>
					<Link href="/">
						<a onClick={handleToggle}>New items</a>
					</Link>
					<Link href="/">
						<a onClick={handleToggle}>Tops</a>
					</Link>
					<Link href="/">
						<a onClick={handleToggle}>Trousers</a>
					</Link>
					<Link href="/">
						<a onClick={handleToggle}>Underwear</a>
					</Link>
					<Link href="/">
						<a onClick={handleToggle}>Scarves</a>
					</Link>
					<Link href="/">
						<a onClick={handleToggle}>Dresses</a>
					</Link>

					<h4>User</h4>
					<Link href="/login">
						<a onClick={handleToggle}>Login</a>
					</Link>
					<Link href={{ pathname: "/login", query: { name: "register" } }}>
						<a onClick={handleToggle}>Register</a>
					</Link>
					<Link href="/">
						<a onClick={handleToggle}>Help</a>
					</Link>
				</div>
			) : null}
		</>
	);
};

export default MenuBar;
