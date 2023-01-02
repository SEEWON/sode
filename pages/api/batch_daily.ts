import { insertOneInCollection, updateOneInCollection } from './db';

const dataInit = () => {
  const date = new Date();
  const m = date.getMonth() + 1;
  const d = date.getDate();
  const today = `${date.getFullYear()}${m > 9 ? '' : 0}${m}${
    d > 9 ? '' : 0
  }${d}`;

  const isWeekend = date.getDay() === 0 || date.getDay() === 6 ? true : false;

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
  const date = new Date();
  date.setDate(date.getDate() - 1);
  const m = date.getMonth() + 1;
  const d = date.getDate();
  const yesterday = `${date.getFullYear()}${m > 9 ? '' : 0}${m}${
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
