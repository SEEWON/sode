//status.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { updateOneInCollection } from './db';

const handler = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const curr_d = new Date();
  const utc = curr_d.getTime() + curr_d.getTimezoneOffset() * 60 * 1000;
  const kr_time_dff = 9 * 60 * 60 * 1000; // UTC+9 시간대 만큼의 Time offset
  const kr_d = new Date(utc + kr_time_dff);
  const m = kr_d.getMonth() + 1;
  const d = kr_d.getDate();
  const today = `${kr_d.getFullYear()}${m > 9 ? '' : 0}${m}${
    d > 9 ? '' : 0
  }${d}`;
  const query = { date: today };

  if (req.method === 'PATCH') {
    try {
      await updateOneInCollection('daily_sode', query, {
        $set: { [req.body.target]: true },
      });
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(res));
    } catch (err) {
      res.json(err);
      res.status(405).end();
    }
  }
};

export default handler;
