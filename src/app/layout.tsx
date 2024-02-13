import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const inter = Josefin_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Elemental Kit: React x Tailwind Component Library",
  description: "Designed & Developed by Tanvir Hossain Sadi",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className="bg-white">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
