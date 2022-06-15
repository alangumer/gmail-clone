// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    console.log("Update contact information");
    res.status(200).json({ success: true });
  } else if (req.method === "DELETE") {
    console.log("Delete contact");
    res.status(200).json({ success: true });
  }
}
