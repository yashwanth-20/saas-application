import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {Open_Sans} from 'next/font/google'

const OpenSans=Open_Sans({subsets:['latin']});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={OpenSans.className}
      >
        {children}
      </body>
    </html>
  );
}
