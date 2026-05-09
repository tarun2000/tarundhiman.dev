import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { DevConsoleMessage } from "@/components/DevConsoleMessage";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Tarun Dhiman - Full-stack Engineer",
  description: "Full-stack engineer building developer tools, intelligent systems, and fast product interfaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.variable}>
        <DevConsoleMessage />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
