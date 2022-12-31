// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { getRecent10, updateOneInCollection } from './db';

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
    // updateOneInCollection;
  } else {
    const d = await getRecent10('daily_sode');
    res.status(200).json(d);
  }
};

export default handler;
