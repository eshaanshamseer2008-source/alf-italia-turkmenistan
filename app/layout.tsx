import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alf Italia Turkmenistan | Italian Luxury Furniture in Ashgabat",
  description:
    "Official representative of Alf Italia in Turkmenistan. Contemporary Italian bedrooms, dining rooms, and high-end living spaces.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-luxury-900 text-luxury-sand selection:bg-luxury-bronze selection:text-luxury-900 antialiased overflow-x-hidden font-sans">
        {children}
      </body>
    </html>
  );
}
