import prisma from "../lib/prisma";
import { Invoice } from "@prisma/client";

export const getStaticProps = async () => {
  const invoices = await prisma.invoice.findMany();
  return {
    props: {
      invoices: JSON.parse(JSON.stringify(invoices)),
    },
  };
};

interface Props {
  invoices: Invoice[];
}
const Home: React.FC<Props> = (invoices) => {
  return (
    <div className="flex flex-col items-center gap-6 justify-center h-screen"></div>
  );
};

export default Home;
