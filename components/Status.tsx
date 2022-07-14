const Status = ({ status }: { status: string }) => {
  const handleColoring = () => {
    if (status === "pending") {
      return "text-[#FF8F00] bg-[#FF8F00] bg-opacity-10";
    }
    if (status === "paid") {
      return "text-[#33D69F] bg-[#33D69F] bg-opacity-10";
    }
    if (status === "draft") {
      return "text-[#DFE3FA] bg-[#DFE3FA] bg-opacity-10";
    }
  };

  const handleDot = () => {
    if (status === "pending") {
      return "bg-[#FF8F00]";
    }
    if (status === "paid") {
      return "bg-[#33D69F]";
    }
    if (status === "draft") {
      return "bg-[#DFE3FA]";
    }
  };

  return (
    <div
      className={`capitalize px-4 font-bold flex gap-2 items-center h-10 ${handleColoring()} rounded-md bg-green-200`}
    >
      <div className={`w-2 h-2 rounded-full ${handleDot()}`}></div>
      {status}
    </div>
  );
};

export default Status;
