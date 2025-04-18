import { JetBrains_Mono } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { Toaster } from "sonner";




const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrainsMono",
  weights: ["100","200","300","400", "500", "600", "700", "800"],
})

export const metadata = {
  title: "Wander's Portfolio",
  description: "my personal portfolio created with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className={jetBrainsMono.variable} >
      <Toaster richColors position="top-center" />
        <Header />
        <StairTransition />
        <PageTransition>
        
        {children}
        
        </PageTransition>
        
      </body>
    </html>
  );
}
