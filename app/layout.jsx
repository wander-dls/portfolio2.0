import { JetBrains_Mono } from "next/font/google";
import "./globals.css";



const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrainsMono",
  weights: ["100","200","300","400", "500", "600", "700", "800"],
})

export const metadata = {
  title: "Wander's Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jetBrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
