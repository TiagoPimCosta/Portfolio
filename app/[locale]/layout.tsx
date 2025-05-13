import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ThemeProvider from "@/components/providers/theme-provider";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { IconDownload } from "@tabler/icons-react";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/src/i18n/routing";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "TiagoPimCosta's Portfolio",
  description:
    "Hi, I’m Tiago Pimenta Costa, a fullstack web developer passionate about building fast, responsive, and user-friendly websites. Check out my work and let’s create something amazing together!",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-xl mx-4 mt-8 lg:mx-auto`}
      >
        <NextIntlClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <Button variant="outline" className="fixed h-10 top-8 right-8 rounded-full" asChild>
              <a href="/TiagoPimCosta_CV_Original.pdf" download>
                CV <IconDownload />
              </a>
            </Button>
            {children}
            <Footer />
            <div className="fixed bottom-8 right-8">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
