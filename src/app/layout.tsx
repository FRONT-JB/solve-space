import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/providers";
import ThemeToggle from "./@auth/ui/ThemeToggle";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Solve Space",
  description: "문제를 풀어보는 공간",
};

export default function RootLayout({
  children,
  auth,
  public: publicPage,
}: Readonly<{
  children: React.ReactNode;
  auth: React.ReactNode;
  public: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="h-full max-w-[1420px] mx-auto p-4">
            {children}
            {auth}
            {publicPage}
          </div>

          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
