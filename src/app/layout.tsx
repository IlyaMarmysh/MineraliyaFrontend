import type {Metadata} from "next";
import '@/app/globals.css';import '@/app/globals.css';
import {Noto_Serif} from "next/font/google";

const noto_Regular = Noto_Serif({
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: "Mineraliya",
    description: "Powered by Ilya Marmysh",
};

import { UserProvider } from '@/context/UserContext';
import {Toaster} from "react-hot-toast";
import HeaderLayout from "@/components/layout/HeaderLayout";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={noto_Regular.className}>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Mineraliya</title>
        </head>
        <body>
        <UserProvider>
            <div className="flex flex-col min-h-dvh justify-between">
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
                <HeaderLayout/>
                {children}
            </div>
        </UserProvider>
        </body>
        </html>
    );
}