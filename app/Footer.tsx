import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="sticky top-full container flex justify-between">
      {" "}
      <Link href="/terms">利用規約</Link>
      <ModeToggle />
    </footer>
  );
};
export default Footer;
