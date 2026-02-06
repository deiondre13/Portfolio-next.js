import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Deiondre Smith | Full-Stack Developer",
  description:
    "Full-Stack Software Developer specializing in ASP.NET Core, React, and modern web technologies. View my portfolio and projects.",
  keywords: [
    "Deiondre Smith",
    "Full-Stack Developer",
    "ASP.NET Core",
    "React",
    "Web Development",
    "Software Engineer",
  ],
  authors: [{ name: "Deiondre Smith" }],
  openGraph: {
    type: "website",
    title: "Deiondre Smith - Full-Stack Developer",
    description:
      "Full-Stack Software Developer specializing in ASP.NET Core, React, and modern web technologies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main className="pt-16 lg:pt-20 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
