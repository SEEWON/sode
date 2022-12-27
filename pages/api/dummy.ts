export type dummyType = {
  date: string;
  weekend: boolean;
  done_s: boolean;
  done_w: boolean;
  done_e: boolean;
  done_p: boolean;
  today: boolean;
}[];

export const dummy: dummyType = [
  {
    date: '20221219',
    weekend: false,
    done_s: true,
    done_w: false,
    done_e: true,
    done_p: false,
    today: false,
  },
  {
    date: '20221220',
    weekend: false,
    done_s: true,
    done_w: true,
    done_e: true,
    done_p: false,
    today: false,
  },
  {
    date: '20221221',
    weekend: false,
    done_s: true,
    done_w: false,
    done_e: true,
    done_p: false,
    today: false,
  },
  {
    date: '20221222',
    weekend: false,
    done_s: true,
    done_w: true,
    done_e: true,
    done_p: false,
    today: false,
  },
  {
    date: '20221223',
    weekend: false,
    done_s: false,
    done_w: false,
    done_e: true,
    done_p: false,
    today: false,
  },
  {
    date: '20221224',
    weekend: true,
    done_s: true,
    done_w: true,
    done_e: true,
    done_p: true,
    today: false,
  },
  {
    date: '20221225',
    weekend: true,
    done_s: false,
    done_w: false,
    done_e: true,
    done_p: true,
    today: false,
  },
  {
    date: '20221226',
    weekend: false,
    done_s: false,
    done_w: true,
    done_e: true,
    done_p: true,
    today: false,
  },
  {
    date: '20221227',
    weekend: false,
    done_s: true,
    done_w: false,
    done_e: true,
    done_p: true,
    today: false,
  },
  {
    date: '20221228',
    weekend: false,
    done_s: false,
    done_w: true,
    done_e: false,
    done_p: false,
    today: true,
  },
];
