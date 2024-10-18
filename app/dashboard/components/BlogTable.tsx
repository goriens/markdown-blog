import { Button } from "@/components/ui/button";
import { FaEye } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { Switch } from "@/components/ui/switch";

export default function BlogTable() {
  return (
    <div className="overflow-y-auto">
      <div className="border bg-graident-dark rounded-md w-[800px] md:w-full">
        <div className="grid grid-cols-5 p-5 text-gray-400 border-b font-semibold">
          <h1 className="col-span-2">Title</h1>
          <h1>Premium</h1>
          <h1>Publish</h1>
        </div>
        <div className="grid grid-cols-5 p-5">
          <h1 className="col-span-2">Blog Title</h1>
          <Switch checked={false} />
          <Switch checked={true} />
          <Actions />
        </div>
      </div>
    </div>
  );
}

const Actions = () => {
  return (
    <div className="flex gap-1 flex-wrap">
      <Button variant="outline">
        <FaEye />
      </Button>
      <Button variant="outline">
        <MdEdit />
      </Button>
      <Button variant="outline">
        <MdDelete />
      </Button>
    </div>
  );
};
