import "./globals.css";
import { JetBrains_Mono } from "next/font/google";

const mono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "The Life of a Developer | Frontend Odyssey",
  description: "A humorous interactive storytelling experience.",
};

// This MUST be a 'default' export and it MUST be a function
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${mono.className} bg-dev-bg text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
