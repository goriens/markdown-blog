import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useUser } from "@/lib/store/user";
import Link from "next/link";
import { Button } from "../ui/button";
import { MdDashboard } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { createBrowserClient } from "@supabase/ssr";

export default function Profile() {
  const user = useUser((state) => state.user);
  const setUser = useUser((state) => state.setUser);

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const handleLogout = () => {
    supabase.auth.signOut();
    setUser(undefined);
  };
  return (
    <>
      <Popover>
        <PopoverTrigger>
          <Avatar>
            <AvatarImage src={user?.user_metadata.avatar_url} />
            <AvatarFallback>{user?.user_metadata.full_name[0]}</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className="flex flex-col gap-2 p-2">
          <div className="text-center p-4">
            <p className="text-gray-400">{user?.user_metadata.email}</p>
            <p>{user?.user_metadata.full_name}</p>
          </div>
          <Button variant="ghost" className="w-full justify-between">
            <Link href="/dashboard">Dashboard</Link>
            <MdDashboard />
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-between"
            onClick={handleLogout}
          >
            Logout <IoLogOut />
          </Button>
        </PopoverContent>
      </Popover>
    </>
  );
}
