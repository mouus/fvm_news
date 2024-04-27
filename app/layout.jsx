import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import localfont from 'next/font/local';



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const waheed = localfont({
  src: [
    {
      path: '../assets/fonts/MV_Waheed.ttf',
      weight: '800',
    },
  ],
  variable: '--font-waheed',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body className={`${waheed.variable}`}>
          <Navbar/>
          {children}
        </body>
    </html>
  );
}
