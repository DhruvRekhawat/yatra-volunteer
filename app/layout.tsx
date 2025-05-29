import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'

const sansation = localFont({
  src: [
    {
      path: '../public/fonts/Sansation-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Sansation-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../public/fonts/Sansation-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/Sansation-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/Sansation-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../public/fonts/Sansation-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
})

export const metadata: Metadata = {
  title: "Volunteer Yatra",
  description: "Demo by Dhruv Rekhawat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sansation.className} ${sansation.style} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
