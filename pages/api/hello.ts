// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const result = await prisma.post.findMany();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ error: "failed to do action" });
  }
}
