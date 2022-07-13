import Image from "next/image";
import postGirl from "../public/assets/illustration-empty.svg";

const NothingHere = () => {
  return (
    <div className="mx-auto max-w-max text-center">
      <Image src={postGirl} alt="girl in a mail" />
      <h1 className="text-xl font-bold">There is nothing here</h1>
      <p className="text-xs text-[#888EB0]">
        Create an invoice by clicking the{" "}
        <span className="font-bold">New </span>button and get started
      </p>
    </div>
  );
};

export default NothingHere;
