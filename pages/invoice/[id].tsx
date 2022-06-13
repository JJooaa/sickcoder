import { GetServerSideProps } from "next";
import React from "react";
import prisma from "../../lib/prisma";
import { Invoice } from "@prisma/client";
import { useRouter } from "next/router";
import GoBack from "../../components/GoBack";

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
  selectedInvoice: Invoice;
}

const Invoice: React.FC<Props> = ({ selectedInvoice }) => {
  const {
    id,
    clientAddress,
    clientEmail,
    clientName,
    createdAt,
    description,
    paymentTerms,
    senderAddress,
    status,
    total,
  } = selectedInvoice;

  const router = useRouter();

  const deletePost = async (id: string) => {
    await fetch(`/api/invoice/${id}`, {
      method: "DELETE",
    });
    router.push("/");
  };

  return (
    <div className="px-6 py-8">
      <GoBack />
      <div>Status {status}</div>
      <p>{id}</p>
      <button onClick={() => deletePost(id)}>Delete</button>
    </div>
  );
};

export default Invoice;
