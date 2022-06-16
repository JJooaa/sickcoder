import Image from "next/image";
import avatarImage from "../public/assets/image-avatar.jpg";
import Logo from "../public/assets/logo.svg";
import Moon from "../public/assets/icon-moon.svg";
import Sun from "../public/assets/icon-sun.svg";

const Header = () => {
  return (
    <header className="w-screen h-20 flex bg-[#373B53] justify-between items-center">
      <div className="bg-[#7C5DFA] h-full flex items-center justify-center w-20 rounded-r-3xl">
        <Image
          src={Logo}
          className="rounded-r-2xl h-full"
          alt="blue pacman looking thing"
        />
      </div>
      <div className="flex h-full gap-8 items-center ">
        <Image src={Moon} alt="a grey moon" />
        <div className="w-[1px] h-full bg-[#494E6E]"></div>
        <Image
          height="40%"
          width="40%"
          src={avatarImage}
          alt="a person wearing a red beanie"
          className="rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;
