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
import { cn } from "@/lib/utils";

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
    "Hi, I'm Tiago Pimenta Costa, a fullstack web developer passionate about building fast, responsive, and user-friendly websites. Check out my work and let's create something amazing together!",
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="max-w-xl mx-4 lg:mx-auto mt-8 relative">
              <Navbar />
              <Button
                variant="outline"
                className={cn(
                  "fixed h-10 rounded-full z-50 w-fit",
                  "left-8 bottom-8", // default for mobile
                  "md:left-auto md:bottom-auto md:top-8 md:right-8" // override for desktop
                )}
                asChild
              >
                <a
                  href="/TiagoPimCosta_CV_Original.pdf"
                  download
                  className="inline-flex items-center gap-2"
                >
                  CV <IconDownload />
                </a>
              </Button>
              {children}
              <Footer />
            </div>
            <div className="fixed bottom-8 right-8 z-50">
              <div className="flex gap-2">
                <LanguageSwitcher />
                <ThemeToggle />
              </div>
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
