// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

// adding a new invoice requires that you have a whole number. prisma.io and mongodb don't have it supported yet. for price for example you can add 100.00 but not 100.50.
// https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#decimal

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
    senderAddress,
    clientAddress,
    items,
  } = req.body;

  try {
    await prisma.invoice.create({
      data: {
        description,
        paymentTerms,
        clientName,
        clientEmail,
        status,
        senderAddress,
        clientAddress,
        items: {
          create: [...items],
        },
      },
    });
    res.status(200).send({ message: "successfully added a new invoice" });
  } catch (error) {
    res.status(500).send({ message: "error!" });
  }
}
