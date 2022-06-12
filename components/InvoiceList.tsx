import { Invoice } from "@prisma/client";
import InvoiceCard from "./InvoiceCard";

const InvoiceList = ({ invoices }: { invoices: Invoice[] }) => {
  return (
    <div className="flex flex-col gap-4 mt-8">
      {invoices.map((invoice) => (
        <InvoiceCard key={invoice.id} invoice={invoice} />
      ))}
    </div>
  );
};

export default InvoiceList;
