import '../styles/index.css'

import { GeistSans } from "geist/font";

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={GeistSans.className}>
            <body>{children}</body>
        </html>
    )
}
