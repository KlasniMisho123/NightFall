import { Exo_2, Geist, Inter, Poppins, Space_Mono, Urbanist } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const exo2 = Exo_2({subsets: ["latin"],weight: ["400", "700"]});
const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });
const poppins = Poppins({ subsets: ["latin"], weight: ["700"] });
const mono = Space_Mono({ subsets: ["latin"], weight: ["700"] });
const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
  title: "NightFall Webworks",
  icons: {
    icon: "./nightfallwebworks.avif",
  },
};

const header = (
  <Header />
)
const footer = (
  <Footer />
)

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
        <body>
          {header}
          {children}
          {footer}
        </body>
      </AuthProvider>
    </html>
  );
}
