import Link from "next/link";
import { PropsWithChildren } from "react";

interface ButtonProps {
  link: string;
}

export function PrimaryButton(props: PropsWithChildren<ButtonProps>) {
  return (
    <>
      <Link
        href={props.link}
        className="w-fit px-4 py-2 bg-zinc-800 font-bold text-white rounded-md"
      >
        {props.children}
      </Link>
    </>
  );
}
