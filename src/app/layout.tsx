import "@/app/ui/global.css";
import Navbar from "@/app/ui/navbar/navbar";
import { arimoRegular } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${arimoRegular.className} antialiased flex flex-col w-full h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
