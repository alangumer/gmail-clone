// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const data = [
  {
    "message-id": "999999",
    from: "Acme Corp",
    subject: "Package delivered Thursday",
  },
  {
    "message-id": "88888888",
    from: "Richard Roe",
    subject: "Re: Project looks good",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(data);
}
