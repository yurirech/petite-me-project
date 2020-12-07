import Link from 'next/link';
import { useState } from 'react';

import styles from './menu-bar.module.scss'
import uStyles from '../../styles/utils.module.scss'

import MenuIcon from '../../public/icon/menu.svg';
import UserIcon from '../../public/icon/person-outline.svg';
import FavoriteIcon from '../../public/icon/favorite-border.svg';
import SearchIcon from '../../public/icon/search.svg';
import CartIcon from '../../public/icon/shopping-cart.svg';


import Input from '../input/input';


const MenuBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);


  return (
    <>
      <div className={uStyles.container}>
        <menu className={`${styles.menu}`}>
          <form>
            <Input type='text' placeholder='Search' addSuffix={true} >
              <SearchIcon width={24}
                          height={24}
                          className={uStyles.blackIcon}
                />
            </Input>
          </form>
          
          <h4>Petite me</h4>
          <MenuIcon width={31} 
                    height={31} 
                    className={styles.icon}
                    onClick={() => setToggleMenu(() => !toggleMenu)} 
                    />
          
          <div className={styles.menuIcons}>
            <UserIcon width={28}
                      height={28}
                      className={uStyles.blackIcon}
              />
            <FavoriteIcon width={28}
                          height={28}
                          className={uStyles.blackIcon}
              />
            <CartIcon width={28}
                      height={28}
                      className={uStyles.blackIcon}
              />
          </div>               
          { toggleMenu ? <div className={`${styles.buttonToggle}`}></div> : null}
        </menu>
        <section className={styles.menuLinks}>
            <Link href='#'><a>New items</a></Link>
            <Link href='#'><a>Tops</a></Link>
            <Link href='#'><a>Trousers</a></Link>
            <Link href='#'><a>Underwear</a></Link>
            <Link href='#'><a>Scarves</a></Link>
            <Link href='#'><a>Dresses</a></Link>
        </section>
      </div>
      {
        toggleMenu ?
        <div className={`${styles.menuPanel}`}>
            <h4>Shop</h4>
            <Link href='#'><a>New items</a></Link>
            <Link href='#'><a>Tops</a></Link>
            <Link href='#'><a>Trousers</a></Link>
            <Link href='#'><a>Underwear</a></Link>
            <Link href='#'><a>Scarves</a></Link>
            <Link href='#'><a>Dresses</a></Link>
           
            <h4>User</h4>
            <Link href='#'><a>Login</a></Link>
            <Link href='#'><a>Register</a></Link>
            <Link href='#'><a>Help</a></Link>
          </div> 
          : null
      }
    </>
  );
}

export default MenuBar;