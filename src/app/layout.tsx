    import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from 'react-toastify';




// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sonia Anthony Portflio",
  description: "Sonia Anthony Portfolio Virtual Assistant Website",
};

export default function RootLayout({ children,}: Readonly<{children: React.ReactNode;
}>) {


  
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body >
       
        <div >
          {children}
        </div>
        <ToastContainer />
        </body>
    </html>
  );
}
