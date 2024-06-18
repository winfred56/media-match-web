import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import NavBar from "./components/nav_bar";
import {Toaster} from "sonner";
import Footer from "@/app/components/footer";

const inter = Inter({subsets: ["latin"]});

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
        <body className={inter.className}>
        <Toaster position={'top-right'}/>
        <div className="title-bar">
            <NavBar/>
        </div>
        <div style={{paddingTop: '50px'}}>
            {children}
        </div>
        <div>
            <Footer/>
        </div>
        </body>
        </html>
    );
}