import Image from "next/image";
import arrowDown from "../public/assets/icon-arrow-down.svg";

const FilterDropdown = () => {
  return (
    <div className="font-bold text-xs">
      Filter{" "}
      <span>
        <Image src={arrowDown} alt="arrow down" />
      </span>
    </div>
  );
};

export default FilterDropdown;
