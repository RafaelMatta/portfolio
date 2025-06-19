import RMLogo from "@/app/ui/rm-logo";
import Link from "next/link";
import { arimo } from "@/app/ui/fonts";
import NavLink from "@/app/ui/navbar/navlink";

export default function Navbar() {
  return (
    <div className="container mb-4 mx-auto p-4 bg-zinc-800 rounded-full text-white flex flex-row justify-between">
      <RMLogo />
      <ul
        className={`${arimo.className} font-bold flex flex-row justify-between items-center`}
      >
        <li>
          <NavLink link="#" label="Home" />
        </li>
        <li>
          <NavLink link="#" label="About" />
        </li>
        <li>
          <NavLink link="#" label="Porfolio" />
        </li>
      </ul>
    </div>
  );
}
