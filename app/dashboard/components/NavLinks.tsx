"use client";

import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function NavLinks() {
  const pathname = usePathname();

  const links = [
    { href: "/dashboard", text: "/dashboard", icon: <MdDashboard /> },
    { href: "/dashboard/user", text: "/user", icon: <FaUser /> },
  ];
  return (
    <div className="flex items-center gap-5 border-b pb-2">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className={cn(
            "flex justify-center items-center hover:underline transition-all",
            { "text-green-400 underline": pathname === link.href }
          )}
        >
          {link.icon}
          {link.text}
        </Link>
      ))}
    </div>
  );
}
