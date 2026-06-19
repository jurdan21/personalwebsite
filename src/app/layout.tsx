import type { Metadata } from "next";
import "./globals.css";
import "./fonts.css";
import SmoothScrollProvider from "./SmoothScrollProvider";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Jurdan Wahyu",
  description: "Personal Website",
  openGraph: {
    title: "Jurdan Wahyu",
    description: "Personal Website",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jurdan Wahyu",
    description: "Personal Website",
  },
  icons: {
    icon: [
      { url: 'https://res.cloudinary.com/dbmcmylvr/image/upload/v1751360473/New%20Website/Favicon_o3q4w0.svg', rel: 'icon', type: 'image/svg+xml' },
      { url: 'https://res.cloudinary.com/dbmcmylvr/image/upload/v1751360473/New%20Website/Favicon_o3q4w0.svg', rel: 'shortcut icon', type: 'image/svg+xml' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white">
      <head>
        <link rel="icon" href="https://res.cloudinary.com/dbmcmylvr/image/upload/v1751360473/New%20Website/Favicon_o3q4w0.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="https://res.cloudinary.com/dbmcmylvr/image/upload/v1751360473/New%20Website/Favicon_o3q4w0.svg" type="image/svg+xml" />
      </head>
      <body className="font-power-grotesk antialiased bg-white">
        <SmoothScrollProvider>
        {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
