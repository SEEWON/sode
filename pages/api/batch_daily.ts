import { insertOneInCollection, updateOneInCollection } from './db';

const dataInit = () => {
  //Github Actions Runner가 수행되는 환경은 UTC+0 환경이므로,
  //한국 시간 기준으로 Data를 추가하기 위한 Datetime 설정
  const curr_d = new Date();
  const utc = curr_d.getTime() + curr_d.getTimezoneOffset() * 60 * 1000;
  const kr_time_dff = 9 * 60 * 60 * 1000; // UTC+9 시간대 만큼의 Time offset
  const kr_d = new Date(utc + kr_time_dff);
  const m = kr_d.getMonth() + 1;
  const d = kr_d.getDate();
  const today = `${kr_d.getFullYear()}${m > 9 ? '' : 0}${m}${
    d > 9 ? '' : 0
  }${d}`;

  const isWeekend = kr_d.getDay() === 0 || kr_d.getDay() === 6 ? true : false;

  const data = {
    date: today,
    weekend: isWeekend,
    done_s: false,
    done_w: false,
    done_e: false,
    done_p: false,
    today: true,
  };

  return data;
};

const modify_yesterday = async () => {
  //Github Actions Runner가 수행되는 환경은 UTC+0 환경이므로,
  //한국 시간 기준으로 Data를 추가하기 위한 Datetime 설정
  const yesterday_d = new Date();
  yesterday_d.setDate(yesterday_d.getDate() - 1);
  const utc =
    yesterday_d.getTime() + yesterday_d.getTimezoneOffset() * 60 * 1000;
  const kr_time_dff = 9 * 60 * 60 * 1000; // UTC+9 시간대 만큼의 Time offset
  const kr_d = new Date(utc + kr_time_dff);
  const m = kr_d.getMonth() + 1;
  const d = kr_d.getDate();
  const yesterday = `${kr_d.getFullYear()}${m > 9 ? '' : 0}${m}${
    d > 9 ? '' : 0
  }${d}`;

  const query = { date: yesterday };
  await updateOneInCollection('daily_sode', query, { $set: { today: false } });
};
modify_yesterday();

const insert_today = async () => {
  await insertOneInCollection('daily_sode', dataInit());
};
insert_today();
