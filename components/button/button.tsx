import styles from './button.module.scss';
import uStyles from '../../styles/utils.module.scss';
import classNames from 'classnames';

interface Button {
  title: string,
  backgroundColor?: string
}

const Button = ({title, backgroundColor }: Button) => {
  const buttonColor = classNames({
    [styles.buttonLight]: backgroundColor === 'light',
    [styles.buttonDark]: backgroundColor === 'dark',
    [styles.buttonBlack]: backgroundColor === 'black',
    [styles.buttonWhite]: backgroundColor === 'white',
  })

  return (
    <>
      <button className={`${styles.button} ${buttonColor}`}>{title}</button>
    </>
  );
}

export default Button;