import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "الاتصالات في الكويت ",
  description:
    "استكشف عالم الاتصالات المتطور في دولة الكويت مع أحدث التقنيات والخدمات الرقمية المبتكرة الدفع السريع والشحن",
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
