import '../styles/index.css'

import { Inter } from '@next/font/google';

const inter = Inter({
    subsets: ["latin"],
    variable: '--font-inter',
});

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={inter.className}>
            <body>{children}</body>
        </html>
    )
}
