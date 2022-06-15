// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const data = [
  "Inbox",
  "Trash",
  "Work Emails",
  "Mailing Lists",
  "Sent",
  "Spam",
  "Drafts",
  "Personal",
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(data);
}
