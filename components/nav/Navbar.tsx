"use client";

import Link from "next/link";
import LoginForm from "./LoginForm";
import { useUser } from "@/lib/store/user";
import Profile from "./Profile";

export default function Navbar() {
  const user = useUser((state) => state.user);

  return (
    <nav className="flex justify-between">
      <div className="group">
        <Link href="/" className="text-2xl font-bold">
          Daily Blog
        </Link>
        <div className="h-1 w-0 group-hover:w-full transition-all bg-green-400"></div>
      </div>
      {user?.id ? <Profile /> : <LoginForm />}
    </nav>
  );
}
