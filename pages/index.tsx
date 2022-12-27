import Head from 'next/head';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import { dummy, dummyType } from './api/dummy';
import ProgressItem from '../components/ProgressItem';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const date: Date = new Date();
  const options: { [key: string]: string } = {
    weekday: 'long',
  };

  const dummyData: dummyType = dummy;
  console.log(dummyData);

  return (
    <>
      <Head>
        <title>SEEWON&apos;s sode</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            sode_매일매일의 힘 (2023.01.02~)
            <br />
            지난 열흘간, SEEWON의 일일 progress를 기록합니다.
            <br />
            <br />
            Today: {date.getFullYear()}.{date.getMonth() + 1}.{date.getDate()}{' '}
            {date.toLocaleDateString('ko-KR', options)}
          </p>
        </div>
        <div className={styles.guide}>
          본 페이지는 모바일 뷰에 최적화되어 있습니다.
        </div>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2 className={inter.className}>🚀 Startup</h2>
            <p className={inter.className}>오늘의 업무(주로 개발, 회의 등)</p>
            <div>
              {dummyData.map((item) => (
                <ProgressItem
                  key={item.date}
                  weekend={item.weekend}
                  done={item.done_s}
                  today={item.today}
                />
              ))}
            </div>
          </div>

          <div className={styles.card}>
            <h2 className={inter.className}>💪 Workout</h2>
            <p className={inter.className}>매일 1시간 정도의 운동</p>
            <div>
              {dummyData.map((item) => (
                <ProgressItem
                  key={item.date}
                  weekend={item.weekend}
                  done={item.done_w}
                  today={item.today}
                />
              ))}
            </div>
          </div>

          <div className={styles.card}>
            <h2 className={inter.className}>📚 English</h2>
            <p className={inter.className}>
              하루 한 시간 이상
              <br />
              토플, 오픽 취득을 위한 공부
            </p>
            <div>
              {dummyData.map((item) => (
                <ProgressItem
                  key={item.date}
                  weekend={item.weekend}
                  done={item.done_e}
                  today={item.today}
                />
              ))}
            </div>
          </div>

          <div className={styles.card}>
            <h2 className={inter.className}>💻️ PS | Algorithms</h2>
            <p className={inter.className}>
              하루 한 문제
              <br />
              알고리즘 문제 해결
            </p>
            <div>
              {dummyData.map((item) => (
                <ProgressItem
                  key={item.date}
                  weekend={item.weekend}
                  done={item.done_p}
                  today={item.today}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
