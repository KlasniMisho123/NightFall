import { Exo_2, Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const exo2 = Exo_2({subsets: ["latin"],weight: ["400", "700"]});

export const metadata = {
  title: "NightFall Webworks",
  description: "Generated by create next app",
  icons: {
    icon: "./nightfallwebworks.avif",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      
        <body
          className={`${geistSans.variable} antialiased`}
          >
          {children}
        </body>
      </AuthProvider>
    </html>
  );
}
