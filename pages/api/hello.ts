// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { doSomething } from "../../lib/test";

type Data = {
  result?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const result = await doSomething(req.body);
    res.status(200).send({ result });
  } catch (error) {
    res.status(500).send({ error: "failed to do action" });
  }
}
