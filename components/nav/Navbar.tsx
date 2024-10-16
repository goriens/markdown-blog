import Link from "next/link";
import LoginForm from "./LoginForm";

export default function Navbar() {
  return (
    <nav className="flex justify-between">
      <div className="group">
        <Link href="/" className="text-2xl font-bold">
          Daily Blog
        </Link>
        <div className="h-1 w-0 group-hover:w-full transition-all bg-green-400"></div>
      </div>
      <LoginForm />
    </nav>
  );
}
