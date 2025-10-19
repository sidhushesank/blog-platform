import type { Metadata } from "next";
import { Providers } from "./providers";
import Header from "../components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blog Platform",
  description: "A modern blog platform with Next.js and tRPC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
