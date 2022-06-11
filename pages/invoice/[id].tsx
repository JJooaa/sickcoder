import { GetServerSideProps } from "next";
import React from "react";
import prisma from "../../lib/prisma";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const selectedInvoice = await prisma.invoice.findUnique({
    where: {
      id: String(params?.id),
    },
    include: {
      items: true,
    },
  });

  return {
    props: {
      selectedInvoice: JSON.parse(JSON.stringify(selectedInvoice)),
    },
  };
};

interface Props {
  selectedInvoice: {}[];
}

const Invoice: React.FC<Props> = ({ selectedInvoice }) => {
  console.log(selectedInvoice);
  return <div>Invoice</div>;
};

export default Invoice;
