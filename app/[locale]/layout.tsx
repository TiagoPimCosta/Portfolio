import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ThemeProvider from "@/components/providers/theme-provider";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/src/i18n/routing";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import CVButton from "@/components/CVButton";

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
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png" }],
  },
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
              {children}
              <Footer />
            </div>
            <div className="fixed bottom-8 right-8 z-50">
              <div className="flex gap-2">
                <LanguageSwitcher />
                <ThemeToggle />
              </div>
            </div>
            <div className="fixed left-8 bottom-8 md:left-auto md:bottom-auto md:top-8 md:right-8">
              <CVButton />
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
