import { Button } from "../ui/button";
import { SiGithub } from "react-icons/si";

export default function LoginForm() {
  return (
    <Button variant="outline" className="flex gap-2">
      <SiGithub /> Login
    </Button>
  );
}
