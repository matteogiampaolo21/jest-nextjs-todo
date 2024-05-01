import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:{
    default: "Next.js and Jest Testing",
    template: "%s | Next.js & Jest"
  },
  description: "Created by Matteo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-neutral-200`}>
        <header className="text-center bg-blue-300 rounded shadow w-500 mx-auto mt-10 py-5">
          <h1>This is the Header.</h1>
        </header>

        {children}


        <footer className="text-center bg-red-300 rounded shadow w-500 mx-auto mb-10 py-5">
          <h1>This is the Footer.</h1>
        </footer>
        
      </body>
    </html>
  );
}
