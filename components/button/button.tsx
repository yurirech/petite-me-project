import styles from './button.module.scss';
import uStyles from '../../styles/utils.module.scss';
import classNames from 'classnames';

interface Button {
  title: string,
  backgroundColor?: string,
  type?: any
}

const Button = ({title, type, backgroundColor }: Button) => {

  return (
    <>
      <button type={type} className={`${styles.button} ${styles[backgroundColor]}`}>{title}</button>
    </>
  );
}

export default Button;