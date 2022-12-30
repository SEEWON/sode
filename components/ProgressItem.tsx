import styles from '../styles/Home.module.css';

interface Props {
  weekend: boolean;
  done: boolean;
  today: boolean;
  displayNoti?: boolean;
  idx: number;
}

const ProgressItem = ({ weekend, done, today, displayNoti, idx }: Props) => {
  const dayMapping: string[] = [
    'T-9',
    'T-8',
    'T-7',
    'T-6',
    'T-5',
    'T-4',
    'T-3',
    'T-2',
    '어제',
    '오늘',
  ];

  // 각 ProgressItem의 weekend, done 상태에 따라 스타일 분기 처리
  // css module의 style 적용을 위한 multi className 부여
  const classes: string = `${styles.square} ${weekend ? styles.weekend : ''} ${
    done ? styles.done : today ? '' : styles.fail
  }`;

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
