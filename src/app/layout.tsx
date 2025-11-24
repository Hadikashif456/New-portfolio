import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import Navigation from "@/components/layout/Navigation";
import ScrollProgress from "@/components/ui/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hadi Kashif | AI Engineer & Full Stack Developer",
  description: "Portfolio of Hadi Kashif, an AI Engineer and Full Stack Developer specializing in Python, Machine Learning, and Next.js. Explore my projects and skills.",
  keywords: ["Hadi Kashif", "AI Engineer", "Full Stack Developer", "Python", "Machine Learning", "Next.js", "Portfolio", "Web Developer"],
  authors: [{ name: "Hadi Kashif" }],
  creator: "Hadi Kashif",
  openGraph: {
    title: "Hadi Kashif | AI Engineer & Full Stack Developer",
    description: "Portfolio of Hadi Kashif, an AI Engineer and Full Stack Developer specializing in Python, Machine Learning, and Next.js.",
    url: "https://hadikashif-portfolio.vercel.app", // Replace with actual domain if different
    siteName: "Hadi Kashif Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Ensure this image exists in public folder or use a placeholder
        width: 1200,
        height: 630,
        alt: "Hadi Kashif Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hadi Kashif | AI Engineer & Full Stack Developer",
    description: "Portfolio of Hadi Kashif, an AI Engineer and Full Stack Developer specializing in Python, Machine Learning, and Next.js.",
    images: ["/og-image.jpg"], // Ensure this image exists
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="lenis lenis-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground overflow-x-hidden`}
      >
        <SmoothScroll>
          <CustomCursor />
          <Navigation />
          <ScrollProgress />
          <main className="relative z-10">{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
