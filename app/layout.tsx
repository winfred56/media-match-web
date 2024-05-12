import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import TitleBar from "./components/title_bar";
import "./globals.css";
import { Footer } from "./components/footer";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Media Match",
  description: "A platform for matching snippets of media content with the actual media.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <div className="title-bar">
          <TitleBar />
        </div>
        <div style={{ paddingTop: '50px' }}> {/* Adjust this value based on the height of your TitleBar */}
          {children}
        </div>
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}