import { Invoice } from "@prisma/client";
import InvoiceCard from "./InvoiceCard";

interface Props {
  invoices: Invoice[];
}

const InvoiceList = ({ invoices }: Props) => {
  return (
    <div className="flex flex-col gap-4 mt-8">
      {invoices.map((invoice) => (
        <InvoiceCard key={invoice.id} invoice={invoice} />
      ))}
    </div>
  );
};

export default InvoiceList;
