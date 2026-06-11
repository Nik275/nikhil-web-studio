import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nikhil Web Studio | Premium Websites for Local Businesses",
  description:
    "Nikhil Web Studio builds premium mobile-first websites for salons, gyms, cafes, clinics, coaching centers, and local businesses that want more WhatsApp leads and bookings.",
  keywords: [
    "web design",
    "local business websites",
    "salon website",
    "gym website",
    "cafe website",
    "clinic website",
    "India web designer",
    "WhatsApp lead generation",
    "mobile-first websites",
  ],
  authors: [{ name: "Nikhil Ogia" }],
  creator: "Nikhil Ogia",
  publisher: "Nikhil Web Studio",
  robots: "index, follow",
  openGraph: {
    title: "Nikhil Web Studio | Premium Websites for Local Businesses",
    description:
      "Premium mobile-first websites for salons, gyms, cafes, clinics, and local businesses that want more WhatsApp leads and bookings.",
    type: "website",
    locale: "en_IN",
    siteName: "Nikhil Web Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikhil Web Studio | Premium Websites for Local Businesses",
    description:
      "Premium mobile-first websites for local businesses that want more WhatsApp leads and bookings.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-black text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
