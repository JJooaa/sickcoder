import { GetServerSideProps } from "next";
import React, { useState } from "react";
import prisma from "../../lib/prisma";
import { Invoice } from "@prisma/client";
import { useRouter } from "next/router";
import GoBack from "../../components/GoBack";
import Status from "../../components/Status";
import DeleteModal from "../../components/DeleteModal";

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
  console.log(selectedInvoice);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    items,
  } = selectedInvoice;

  const router = useRouter();

  return (
    <>
      {isModalOpen && <DeleteModal id={id} setIsModalOpen={setIsModalOpen} />}
      <div className="px-6 py-8 text-xs">
        <GoBack />
        <br />
        <div className="bg-white flex p-5 justify-between items-center rounded-lg">
          Status
          <Status status={status} />
        </div>
        <div className="bg-white p-5 mt-4 rounded-lg text-[#7E88C3]">
          <p className="text-black font-bold text-base uppercase">
            #{id.slice(0, 8)}
          </p>
          <p>{description}</p>
          <br />
          <p>{senderAddress.street}</p>
          <p>{senderAddress.city}</p>
          <p>{senderAddress.postCode}</p>
          <p>{senderAddress.country}</p>
          <br />
          <div className="flex flex-wrap gap-10">
            <div className="flex flex-col justify-between">
              <div>
                <p>Invoice Date</p>
                <p className="text-black text-base font-bold">
                  {createdAt.toString().slice(0, 10)}
                </p>
              </div>
              <div>
                <p>Payment Due</p>
                <p className="text-black text-base font-bold">
                  {createdAt.toString().slice(0, 10)}
                </p>
              </div>
            </div>
            <div>
              <p>Bill to</p>
              <p className="text-black text-base font-bold">{clientName}</p>
              <p>{clientAddress.street}</p>
              <p>{clientAddress.city}</p>
              <p>{clientAddress.postCode}</p>
              <p>{clientAddress.country}</p>
            </div>
            <div>
              <p>Sent To</p>
              <p className="text-base font-bold text-black">{clientEmail}</p>
            </div>
          </div>
          <br />
          <br />
          <div className="bg-[#F9FAFE] rounded-lg">
            {items.map((item) => (
              <div
                key={item.name}
                className="p-4 flex items-center justify-between"
              >
                <div>
                  <p className="text-black font-bold capitalize">{item.name}</p>
                  <p>
                    {item.quantity} x € {item.price}
                  </p>
                </div>
                <p className="text-black font-bold">
                  $ {item.quantity * item.price}
                </p>
              </div>
            ))}
            <div className="bg-[#373B53] p-4 text-white rounded-b-lg flex justify-between items-center">
              Grand Total: <span className="text-xl">€ {total}</span>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-white flex justify-evenly items-center h-24 shadow-2xl shadow-black px-5 text-xs">
        <button className="p-4 font-bold bg-[#F9FAFE] text-[#7E88C3] rounded-3xl">
          Edit
        </button>
        <button
          className="p-4 font-bold bg-[#EC5757] text-white rounded-3xl"
          onClick={() => setIsModalOpen(true)}
        >
          Delete
        </button>
        <button className="p-4 font-bold bg-[#7C5DFA] text-white rounded-3xl">
          Mark as Paid
        </button>
      </footer>
    </>
  );
};

export default Invoice;
