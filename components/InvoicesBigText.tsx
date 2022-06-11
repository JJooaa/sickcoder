interface Props {
  invoiceLength: number;
}

const InvoicesBigText = ({ invoiceLength }: Props) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-xl font-bold">Invoices</h1>
      <p className="text-xs">There are {invoiceLength} total invoices</p>
    </div>
  );
};

export default InvoicesBigText;
