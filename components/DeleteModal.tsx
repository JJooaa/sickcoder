import { useRouter } from "next/router";

const DeleteModal = ({
  id,
  setIsModalOpen,
}: {
  id: string;
  setIsModalOpen: (value: boolean) => void;
}) => {
  const router = useRouter();

  const deletePost = async (id: string) => {
    await fetch(`/api/invoice/${id}`, {
      method: "DELETE",
    });
    router.push("/");
  };

  return (
    <div className="h-full w-full flex absolute  top-0 bottom-0 bg-black  bg-opacity-50 z-10 flex-col justify-center items-center">
      <div className="flex flex-col gap-4 bg-white m-4  rounded-lg p-6">
        <h1 className="text-2xl font-bold ">Confirm Deletion</h1>
        <p className="text-[#888EB0] text-xs">
          Are you sure you want to delete invoice #
          {id.slice(0, 8).toUpperCase()}? This action cannot be undone.
        </p>
        <div className="flex justify-end gap-2">
          <button
            onClick={() => setIsModalOpen(false)}
            className="py-4 px-5 font-bold bg-[#F9FAFE] text-[#7E88C3] rounded-3xl text-xs"
          >
            Cancel
          </button>
          <button
            onClick={() => deletePost(id)}
            className="py-4 px-5 font-bold bg-[#EC5757] text-white rounded-3xl text-xs"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
