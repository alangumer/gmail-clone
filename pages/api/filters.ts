// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const data = [
  {
    "match-field": "subject",
    "match-text": "lotto",
    action: "move",
    target: "spam",
  },
  {
    "match-field": "subject",
    "match-text": "package",
    action: "move",
    target: "Personal",
  },
  {
    "match-field": "from",
    "match-text": "Joe",
    action: "move",
    target: "Personal",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(data);
}
