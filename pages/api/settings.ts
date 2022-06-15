// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const data = {
  signature: "--------\nCoding Test User\nFrontend Engineer, Wallaroo",
  "vacation-autorespond": false,
  density: "compact",
  "inbox-type": "priority-inbox",
  "messages-per-page": 50,
  "reply-mode": "reply-all",
  spellcheck: false,
  autocorrect: false,
  "desktop-notifications": false,
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(data);
}
