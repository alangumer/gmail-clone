// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const data = [
  {
    name: "Grace Hopper",
    email: "grace.hopper@example.com",
    icon: "https://example.com/~grace/photo.gif",
  },
  {
    name: "Richard Roe",
    email: "richard.roe@example.com",
    icon: "https://example.com/users/roe.jpg",
  },
  {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    icon: "https://example.com/doe.jpg",
  },
  {
    name: "Montgomery Burns",
    email: "burns@example.com",
  },
  {
    name: "Alan Turing",
    email: "alan@example.com",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(data);
  } else if (req.method === "POST") {
    console.log("Create a new contact");
    res.status(200).json({ success: true });
  }
}
