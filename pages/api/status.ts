//status.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { updateOneInCollection } from './db';

const handler = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const date = new Date();
  const m = date.getMonth() + 1;
  const d = date.getDate();
  const today = `${date.getFullYear()}${m > 9 ? '' : 0}${m}${
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
