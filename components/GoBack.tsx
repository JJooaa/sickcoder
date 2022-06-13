import Image from "next/image";
import Link from "next/link";
import arrowLeft from "../public/assets/icon-arrow-left.svg";

const GoBack = () => {
  return (
    <Link href="/">
      <a className="flex items-center gap-4  font-bold">
        <Image src={arrowLeft} alt="left pointing arrow" />
        Go Back
      </a>
    </Link>
  );
};

export default GoBack;
