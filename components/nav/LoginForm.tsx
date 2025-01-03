"use client";

import { Button } from "../ui/button";
import { SiGithub } from "react-icons/si";
import { createBrowserClient } from "@supabase/ssr";
import { usePathname } from "next/navigation";

export default function LoginForm() {
  const pathname = usePathname();
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const handleLogin = () => {
    supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: location.origin  + pathname,
      },
    });
  };

  return (
    <Button variant="outline" className="flex gap-2" onClick={handleLogin}>
      <SiGithub /> Login
    </Button>
  );
}
