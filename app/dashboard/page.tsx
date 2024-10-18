import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import BlogTable from "./components/BlogTable";

export default function Dashboard() {
  return (
    <div>
      <div className="flex justify-between my-2">
        <h1 className="text-2xl font-semibold">Blogs</h1>
        <Link href="/dashboard/blog/create">
          <Button variant="outline" className="gap-2">
            <FaPlus /> Create
          </Button>
        </Link>
      </div>
      <BlogTable />
    </div>
  );
}
