import {Geist, Geist_Mono} from "next/font/google";
import '@/styles/globals.css'
import Header from "@/component/header";
import Footer from "@/component/footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Nail Salon",
    description: "Luxury Nail Spa - Pamper Yourself with Elegance and Style",
    icons: {
        icon: "/images/lotus_logo.png",
    },
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col overflow-x-hidden `}
        >
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
