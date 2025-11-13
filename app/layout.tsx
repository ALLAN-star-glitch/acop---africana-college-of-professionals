import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TopHeader } from "@/components/header/TopHeader";
import { MainHeader } from "@/components/header/MainHeader";
import { Footer } from "@/components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Africana College of Professionals | Professional Courses & Learning",
  description: "Join Africana College of Professionals to access top-tier professional courses, scholarships, and career development resources.",
  keywords: [
    "Africana College",
    "professional courses",
    "career development",
    "scholarships",
    "online learning",
    "Kenya"
  ].join(", "),
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Africana College of Professionals",
    description: "Access professional courses, scholarships, and career growth resources at Africana College of Professionals.",
    url: "https://acop.co.ke/",
    siteName: "Africana College of Professionals",
    type: "website",
    images: [
      {
        url: "https://plus.unsplash.com/premium_photo-1682284353484-4e16001c58eb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D", // replace with your actual featured image URL
        width: 1200,
        height: 630,
        alt: "Africana College of Professionals - Featured Image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TopHeader />
        <MainHeader />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
