// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json([]);
  } else if (req.method === "POST") {
    console.log("Create a new folder if it doesn't exist yet");
    res.status(200).json({ success: true });
  } else if (req.method === "DELETE") {
    console.log("Delete folder");
    res.status(200).json({ success: true });
  }
}
