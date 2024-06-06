import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/components/ui/toast";

const inter = Inter({ subsets: ["latin"] });
import "bootstrap/dist/css/bootstrap-grid.min.css";
export const metadata: Metadata = {
  title: "journeyease",
  description: "Faça seu guia de viagem de forma simples para registrar seus momentos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ToastProvider>
        {children}
        </ToastProvider>
         </body>
    </html>
  );
}
