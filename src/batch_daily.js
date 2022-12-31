const { insertOneInCollection, updateOneInCollection } = require('./db');

const q = { age: { $gt: 20 } };
const d = { $set: { name: 'Seeeean', age: 23 } };

const dataInit = () => {
  const today = new Date();
  const date_today = `${today.getFullYear()}${
    today.getMonth() + 1
  }${today.getDate()}`;
  const isWeekend = today.getDay() === 0 || today.getDay() === 6 ? true : false;

  const data = {
    date: date_today,
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
  const today = new Date();
  const date_yesterday = `${today.getFullYear()}${today.getMonth() + 1}${
    today.getDate() - 1
  }`;
  const query = { date: date_yesterday };
  await updateOneInCollection('daily_sode', query, { $set: { today: false } });
};
modify_yesterday();

const insert_today = async () => {
  await insertOneInCollection('daily_sode', dataInit());
};
insert_today();
