import "./globals.css";
import styles from "./layout.module.css";
import NavBar from "@/components/navbar/navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alex's Website",
  description: "Personal website by Alex Wu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <div className={styles.container}>{children}</div>
      </body>
    </html>
  );
}
