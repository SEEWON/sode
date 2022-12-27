import styles from '../styles/Home.module.css';

interface Props {
  weekend: boolean;
  done: boolean;
  today: boolean;
}

const ProgressItem = ({ weekend, done, today }: Props) => {
  // 각 ProgressItem의 weekend, done 상태에 따라 스타일 분기 처리
  // css module의 style 적용을 위한 multi className 부여
  const classes: string = `${styles.square} ${weekend ? styles.weekend : ''} ${
    done ? styles.done : today ? '' : styles.fail
  }`;

  return <span className={classes}></span>;
};

export default ProgressItem;
