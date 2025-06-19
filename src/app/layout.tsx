import "@/app/ui/global.css";
import { arimo } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${arimo.className} font-normal antialiased flex flex-col w-full h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
