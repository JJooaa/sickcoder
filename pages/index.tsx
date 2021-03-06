import prisma from "../lib/prisma";
import { Invoice } from "@prisma/client";
import InvoicesBigText from "../components/InvoicesBigText";
import FilterDropdown from "../components/FilterDropdown";
import NewInvoiceButton from "../components/NewInvoiceButton";
import InvoiceList from "../components/InvoiceList";
import NothingHere from "../components/NothingHere";

export const getStaticProps = async () => {
  const invoices = await prisma.invoice.findMany({
    include: {
      items: true,
    },
  });
  return {
    props: {
      invoices: JSON.parse(JSON.stringify(invoices)),
    },
  };
};

interface Props {
  invoices: Invoice[];
}

const Home: React.FC<Props> = ({ invoices }) => {
  return (
    <div className="mx-6 my-8 h-11">
      <section className="flex items-center justify-between">
        <InvoicesBigText invoiceLength={invoices.length} />
        <FilterDropdown />
        <NewInvoiceButton />
      </section>
      <InvoiceList invoices={invoices} />
      {invoices.length === 0 && <NothingHere />}
    </div>
  );
};

export default Home;
