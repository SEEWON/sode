// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { updateOneInCollection } from './db';

export type Data = {
  date: string;
  weekend: boolean;
  done_s: boolean;
  done_w: boolean;
  done_e: boolean;
  done_p: boolean;
  today: boolean;
}[];

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === 'PUT') {
    const date = new Date();
    const today = `${date.getFullYear()}${
      date.getMonth() + 1
    }${date.getDate()}`;
    const query = { date: today };
    let target;
    if (req.body.target === 's') target = 'done_s';
    else if (req.body.target === 'w') target = 'done_w';
    else if (req.body.target === 'e') target = 'done_e';
    else if (req.body.target === 'p') target = 'done_p';

    updateOneInCollection('daily_sode', query, { $set: { target: true } });
  }
};

export default handler;
