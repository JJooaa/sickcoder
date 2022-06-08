// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    description,
    paymentTerms,
    clientName,
    clientEmail,
    status,
    senderAdress,
    clientAddress,
  } = req.body;

  await prisma.invoice.create({
    data: {
      description,
      paymentTerms,
      clientName,
      clientEmail,
      status,
      senderAdress,
      clientAddress,
    },
  });
  res.status(200).send({ message: req.body });
}
