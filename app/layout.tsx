import type {Metadata} from "next";
import {Manrope} from "next/font/google";
import "./globals.css";
import {Footer} from "./components/footer";
import NavBar from "./components/nav_bar";
import {Toaster} from "sonner";

const manrope = Manrope({subsets: ["latin"]});

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
        <body className={manrope.className}>
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