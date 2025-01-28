import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/providers";
import "./globals.css";
import { supabaseServer } from "./lib/supabase/server";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Sidebar } from "./_components";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  snippets: React.ReactNode;
}>) {
  const supabase = await supabaseServer();

  const session = await supabase.auth.getUser();

  const hasLoggedIn = session.data.user !== null;

  const userIdentities = session.data.user?.identities;

  console.log(session);

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
          <SidebarProvider>
            <Sidebar
              hasLoggedIn={hasLoggedIn}
              userIdentities={userIdentities}
            />

            <div className="h-full w-full mx-auto p-4">
              <SidebarTrigger />

              {children}
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
