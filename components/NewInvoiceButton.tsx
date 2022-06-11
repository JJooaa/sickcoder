import Image from "next/image";
import IconPlus from "../public/assets/icon-plus.svg";

const NewInvoiceButton = () => {
  return (
    <button className="bg-[#7C5DFA] relative text-xs h-10 flex text-white items-center w-[90px] justify-end pr-4 font-bold  rounded-3xl">
      <div className="rounded-full bg-white absolute left-1 flex w-8 h-8 justify-center items-center">
        <Image src={IconPlus} alt="plus sign" />
      </div>
      New
    </button>
  );
};

export default NewInvoiceButton;
