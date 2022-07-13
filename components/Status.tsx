const Status = ({ status }: { status: string }) => {
  return (
    <div className="capitalize px-4 flex items-center h-10 rounded-md bg-green-200">
      {status}
    </div>
  );
};

export default Status;
