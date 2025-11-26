import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "المدونة الرئيسية ",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
