import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { VantaNetBackground } from "@/components/VantaWavesBackground";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Matthew Merritt - Software Engineer",
  description: "Software Engineer @ Visa | B.S. Computer Science @ RPI | Ex-Google Intern. Specializing in distributed systems, microservices architecture, and scalable backend solutions.",
  keywords: ["software engineer", "visa", "google", "rpi", "distributed systems", "microservices", "java", "aws", "kafka"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased text-slate-50`}>
        <VantaNetBackground />
        <div style={{ position: 'relative', zIndex: 1 }}>
          {children}
        </div>
      </body>
    </html>
  );
}
