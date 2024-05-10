import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from 'react-toastify';
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'


export const metadata: Metadata = {
  title: "Sonia Anthony Portflio",
  description: "Sonia Anthony Portfolio Virtual Assistant Website",
};

export default function RootLayout({ children,}: Readonly<{children: React.ReactNode;
}>) {



  
  return (
    <html lang="en">
      <body >
          {children}        
        <ToastContainer />
        </body>
    </html>
  );
}
