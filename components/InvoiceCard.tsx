import { Invoice } from "@prisma/client";
import { useRouter } from "next/router";

const InvoiceCard = ({ invoice }: { invoice: Invoice }) => {
  const { id, createdAt, total, status, clientName } = invoice;

  const router = useRouter();

  const handleClick = () => router.push(`/invoice/${id}`);

  !invoice && <div>Loading...</div>;

  return (
    <div
      onClick={handleClick}
      className="flex flex-wrap justify-between h-36 p-6 text-sm bg-white rounded-lg"
    >
      <code>#{id.slice(0, 8)}</code>
      <p>{clientName}</p>
      <time>{createdAt.toString().slice(0, 10)}</time>
      <div className="capitalize px-4 flex items-center h-10 rounded-md bg-green-400">
        {status}
      </div>
      <p className="font-bold text-base">£ {total}</p>
    </div>
  );
};

export default InvoiceCard;
