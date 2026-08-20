import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { SidebarLayout } from "@/components/sidebar/SidebarLayout";
import { TooltipProvider } from "@nyck/aqueous-ui";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Aqueous",
    template: "%s · Aqueous",
  },
  description:
    "Aqueous is the internal design system for documenting and exploring UI components.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full font-sans">
        <TooltipProvider>
          <SidebarLayout>{children}</SidebarLayout>
        </TooltipProvider>
      </body>
    </html>
  );
}
