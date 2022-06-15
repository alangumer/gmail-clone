// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import data from "./data";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const message = data.find((message) => message.id === req.query.id);
    if (message) {
      res.status(200).json(message);
      return;
    }
    res.status(404).send("Not found");
  } else if (req.method === "POST") {
    console.log("Update message metadata");
    res.status(200).json({ success: true });
  } else if (req.method === "DELETE") {
    console.log("Delete message");
    res.status(200).json({ success: true });
  }
}
