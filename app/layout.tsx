import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fresh Harvest",
  description: "Seasonal groceries delivered from local farms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex min-h-screen flex-col bg-zinc-50 text-zinc-900">
          <header className="border-b border-zinc-200/70 bg-white/80 backdrop-blur">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
              <Link className="flex items-center gap-3" href="/">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-green-600 text-sm font-semibold text-white">
                  FH
                </div>
                <div>
                  <p className="text-lg font-semibold text-zinc-900">
                    Fresh Harvest
                  </p>
                  <p className="text-xs text-zinc-500">Farm to door in hours</p>
                </div>
              </Link>
              <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-600 md:flex">
                <Link className="hover:text-zinc-900" href="/">
                  Home
                </Link>
                <Link className="hover:text-zinc-900" href="/shop">
                  Shop
                </Link>
                <Link className="hover:text-zinc-900" href="/about">
                  About
                </Link>
                <Link className="hover:text-zinc-900" href="/delivery">
                  Delivery
                </Link>
                <Link className="hover:text-zinc-900" href="/sustainability">
                  Sustainability
                </Link>
                <Link className="hover:text-zinc-900" href="/reviews">
                  Reviews
                </Link>
                <Link className="hover:text-zinc-900" href="/contact">
                  Contact
                </Link>
              </nav>
              <div className="flex items-center gap-3">
                <Link
                  className="hidden text-sm font-medium text-zinc-600 hover:text-zinc-900 sm:inline-flex"
                  href="/account"
                >
                  Sign in
                </Link>
                <Link
                  className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800"
                  href="/cart"
                >
                  Start cart
                </Link>
              </div>
            </div>
          </header>
          <div className="flex-1">{children}</div>
          <footer className="border-t border-zinc-200 bg-white">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-base font-semibold text-zinc-900">
                  Fresh Harvest
                </p>
                <p className="mt-2 text-sm text-zinc-500">
                  Bringing local farms to your kitchen.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 text-sm font-medium text-zinc-600">
                <Link className="hover:text-zinc-900" href="/delivery">
                  Delivery zones
                </Link>
                <Link className="hover:text-zinc-900" href="/partners">
                  Farm partners
                </Link>
                <Link className="hover:text-zinc-900" href="/sustainability">
                  Sustainability
                </Link>
                <Link className="hover:text-zinc-900" href="/contact">
                  Help center
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
