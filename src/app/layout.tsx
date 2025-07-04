import type { Metadata } from "next";
import "./globals.css";
import "./fonts.css";

export const metadata: Metadata = {
  title: "Jurdan Wahyu",
  description: "Personal Website",
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
        {children}
      </body>
    </html>
  );
}
