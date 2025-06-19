import Navbar from "@/app/ui/navbar/navbar";
import Image from "next/image";
import { socialMedia } from "@/app/lib/placeholder-data";
import SocialMedia from "@/app/ui/socialmedia";
import Link from "next/link";
import Topic from "@/app/ui/about/topic";
import { PrimaryButton } from "./ui/buttons";

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
      <section className="py-20 bg-zinc-800">
        <div className="container mx-auto bg-white rounded-lg overflow-hidden flex flex-row gap-16">
          <div className="w-3/5 py-16 pl-8 flex flex-col">
            <h1 className="font-bold text-4xl mb-4">{`{ Hi there! Rafael here }`}</h1>
            <p className="mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              auctor lorem orci, quis bibendum leo facilisis eu. Praesent mattis
              arcu sit amet neque auctor, et pulvinar quam maximus. Mauris
              lectus eros, molestie a convallis quis, congue et nibh. Dolor sit
              amet, consectetur adipiscing elit. Aliquam auctor lorem orci,
              raesent mattis arcu sit amet neque auctor, et pulvinar quam
              maximus
            </p>
            <div className="flex flex-wrap flex-col gap-1 h-20 mb-16">
              <Topic label="age">23</Topic>
              <Topic label="Adress">Brazil, São Paulo</Topic>
              <Topic label="e-mail">rafaelbbmatta@gmail.com</Topic>
              <Topic label="phone">{`+55 (11) 98857-2134`}</Topic>
            </div>
            <PrimaryButton link="#">Contact</PrimaryButton>
          </div>
          <div className="bg-zinc-400 w-2/5">
            <Image src="/images/perfil" alt="Rafael Matta" fill />
          </div>
        </div>
      </section>
    </>
  );
}
