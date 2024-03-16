import { Inter } from "next/font/google";
import "./globals.css";
import Nav from '@/components/Navigasi';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "#dhinahemat",
  description: "Mengatur keuangan si boros",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />{children}
      </body>
    </html>
  );
}
