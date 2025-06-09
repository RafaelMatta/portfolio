import Navbar from "@/app/ui/navbar/navbar";
import Image from "next/image";
import { socialMedia } from "@/app/lib/placeholder-data";
import SocialMedia from "@/app/ui/socialmedia";
import { arimoBold } from "./ui/fonts";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <main className="relative flex flex-col py-8 h-full min-h-screen ">
        <div className="absolute bg-[url(/background/pattern_brackets.png)] bg-repeat opacity-5 left-0 top-0 w-full h-full -z-50 animate-slow-slide"></div>
        <Navbar />
        <div className="container relative left-0 right-0 mx-auto grow flex flex-col justify-around items-center">
          <div className="flex flex-col justify-center items-center gap-16">
            <Image
              unoptimized
              src={`/logo/logo_1.gif`}
              height={100}
              width={1200}
              alt="Logo"
            />
            <div className="flex flex-row items-center gap-4">
              {socialMedia.map((data, index) => (
                <SocialMedia key={index} icon={data.icon} url={data.url} />
              ))}
            </div>
            <p className={`text-lg`}>
              {`{ first to the key, first to the egg }`}
            </p>
          </div>
          <Link
            href="#"
            className={`font-bold leading-none text-4xl hover:animate-bounce-fixed flex h-12 w-12 after:-translate-x-2/4 after:-translate-y-2/4 relative after:absolute after:content-['}'] after:rotate-90 after:left-2/4 after:top-2/4`}
          />
        </div>
      </main>
    </>
  );
}
