import styles from './button.module.scss';
import uStyles from '../../styles/utils.module.scss';
import classNames from 'classnames';
import { Children } from 'react';

interface Button {
  title?: string,
  backgroundColor?: string,
  type?: any
  children?: any
}

const Button = ({title, type, backgroundColor, children }: Button) => {

  return (
    <>
      <button type={type} className={`${styles.button} ${styles[backgroundColor]}`}>{title}{children}</button>
    </>
  );
}

export default Button;