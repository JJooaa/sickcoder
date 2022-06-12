import { GetServerSideProps } from "next";
import React from "react";
import prisma from "../../lib/prisma";
import { Invoice } from "@prisma/client";
import { useRouter } from "next/router";

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
  const router = useRouter();

  const deletePost = async (id: string) => {
    await fetch(`/api/invoice/${id}`, {
      method: "DELETE",
    });
    router.push("/");
  };

  return (
    <div className="px-6 py-8">
      <button className="font-bold" onClick={() => router.push("/")}>
        Go Back
      </button>
      <div>Status {selectedInvoice.status}</div>
      <p>{selectedInvoice.id}</p>
      <button onClick={() => deletePost(selectedInvoice.id)}>Delete</button>
    </div>
  );
};

export default Invoice;
