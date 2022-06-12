import prisma from "../../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

// handle the deleted request or updates in /api/invoice/id

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const invoiceId = req.query.id;
  if (req.method === "DELETE") {
    await prisma.invoice.delete({
      where: {
        id: invoiceId.toString(),
      },
    });
    res
      .status(200)
      .send({ message: `Succesfully deleted post with id ${invoiceId}` });
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
};

export default handler;
