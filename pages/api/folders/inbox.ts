// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const data = [
  {
    "message-id": "123abc",
    from: "Jane Doe",
    subject: "Re: Postgres Meetup Thursday",
  },
  {
    "message-id": "456def",
    from: "Richard Roe",
    subject: "Lunch Next Week",
  },
  {
    "message-id": "789aaa",
    from: "Alan Turing",
    subject: "Emacs Release Update",
  },
  {
    "message-id": "098ddd",
    from: "Grace Hopper",
    subject: "New Compiler Version Available",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(data);
}
