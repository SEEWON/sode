import styles from '../styles/Home.module.css';

interface Props {
  weekend: boolean;
  done: boolean;
  today: boolean;
  displayNoti?: boolean;
  idx: number;
}

const ProgressItem = ({ weekend, done, today, displayNoti, idx }: Props) => {
  // 각 ProgressItem의 weekend, done 상태에 따라 스타일 분기 처리
  // css module의 style 적용을 위한 multi className 부여
  const classes: string = `${styles.square} ${weekend ? styles.weekend : ''} ${
    done ? styles.done : today ? '' : styles.fail
  }`;

  const dayMapping: string[] = [
    'D+9',
    'D+8',
    'D+7',
    'D+6',
    'D+5',
    'D+4',
    'D+3',
    'D+2',
    '어제',
    '오늘',
  ];

  if (displayNoti)
    return (
      <span className={styles.itemContainer}>
        <span className={styles.dateNoti}>{dayMapping[idx]}</span>
        <span className={classes}></span>
      </span>
    );
  else return <span className={classes}></span>;
};

export default ProgressItem;
