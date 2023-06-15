import "./globals.css";
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { ScrollToTop } from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/Whastapp";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <ScrollToTop />
        <WhatsAppButton />
          {children}
        <Footer />
        </body> 
    </html>
  );
}