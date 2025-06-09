import Link from "next/link";

interface NavLinkProps {
  link: String;
  label: String;
}

const beforeTransition =
  "before:duration-300 before:transition-all before:absolute before:left-6 before:opacity-0 hover:before:opacity-100 hover:before:left-3";
const afterTransition =
  "after:duration-300 after:transition-all after:absolute after:right-6 after:opacity-0 hover:after:opacity-100 hover:after:right-3";

export default function NavLink({ link, label }: NavLinkProps) {
  return (
    <Link
      className={`px-8 relative ease-in-out after:content-['}'] before:content-['{'] ${beforeTransition} ${afterTransition}`}
      href={`${link}`}
    >
      {label}
    </Link>
  );
}
