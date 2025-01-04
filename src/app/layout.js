import { Inter, Playfair_Display } from "next/font/google";
import { Theme } from "@radix-ui/themes";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import "@radix-ui/themes/styles.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata = {
  title: "Zaparmy",
  description: "EWM, MM ve diğer SAP modüllerinde uzman ekibimizle işletmenizi geleceğe taşıyoruz.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <Theme>
          <Header />
          <main className="min-h-[calc(100vh-4rem)]">{children}</main>
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
