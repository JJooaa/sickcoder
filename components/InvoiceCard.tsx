import { Invoice } from "@prisma/client";
import { useRouter } from "next/router";
import Status from "./Status";
import { useWindowSize } from "usehooks-ts";

const InvoiceCard = ({ invoice }: { invoice: Invoice }) => {
  const { id, createdAt, total, status, clientName } = invoice;
  const { width } = useWindowSize();
  const router = useRouter();

  const handleClick = () => router.push(`/invoice/${id}`);

  !invoice && <div>Loading...</div>;

  const handleDesktopCard = () => {
    return (
      <div
        onClick={handleClick}
        className="flex flex-wrap justify-between items-center p-6 text-sm bg-white rounded-lg"
      >
        <code className="font-bold">#{id.slice(0, 8).toUpperCase()}</code>
        <time>Due {createdAt.toString().slice(0, 10)}</time>
        <p>{clientName}</p>
        <p className="font-bold text-lg">£ {total}</p>
        <Status status={status} />
      </div>
    );
  };

  const handleMobileCard = () => {
    return (
      <div
        onClick={handleClick}
        className="p-6 text-sm flex flex-col gap-6 bg-white rounded-lg"
      >
        <div className="flex justify-between">
          <code className="font-bold">#{id.slice(0, 8).toUpperCase()}</code>
          <p>{clientName}</p>
        </div>
        <div className="flex justify-between">
          <div>
            <time>Due {createdAt.toString().slice(0, 10)}</time>
            <p className="font-bold text-lg">£ {total}</p>
          </div>
          <Status status={status} />
        </div>
      </div>
    );
  };

  return <>{width > 700 ? handleDesktopCard() : handleMobileCard()}</>;
};

export default InvoiceCard;
