import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import ActiveSectionContextProvider from "@/context/active-section-context";
import CustomCursor from "@/components/custom-cursor";
import ThemeContextProvider from "@/context/theme-context";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anand Roy",
  description: "Anand is a frontend developer with 5 years of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-white dark:bg-neutral-950 leading-relaxed dark:text-slate-400 text-nutral-800 antialiased selection:bg-teal-300 selection:text-teal-900`}
      >
        <div className="relative ">
          <CustomCursor />
          <ThemeContextProvider>
            <ActiveSectionContextProvider>
              <Toaster position="top-right" />
              {children}
            </ActiveSectionContextProvider>
          </ThemeContextProvider>
        </div>
      </body>
    </html>
  );
}
