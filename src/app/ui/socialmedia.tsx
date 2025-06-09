import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

interface socialMediaProps {
  icon: any;
  url: string;
}

export default function SocialMedia({ icon, url }: socialMediaProps) {
  return (
    <>
      <Link
        className="overflow-hidden rounded-full border-solid border-2 border-zinc-800 transition-all hover:scale-110"
        href={url}
      >
        <FontAwesomeIcon className="w-10 h-10 p-2" icon={icon} />
      </Link>
    </>
  );
}
