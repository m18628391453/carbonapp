import type { Metadata } from "next";
import '@chatui/core/dist/index.css';
import "./globals.css";

const TITLE = process.env.TITLE;
const DESCRIPT = process.env.DESCRIPT;
const KEY_WORDS = process.env.KEY_WORDS;
const ICON = process.env.ICON;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPT,
  keywords: KEY_WORDS?.split(','),
  icons: {
    icon: ICON,
    shortcut: ICON,
    apple: ICON,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
