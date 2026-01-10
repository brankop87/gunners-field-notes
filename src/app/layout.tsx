import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Gunners Field Notes",
    template: "%s • Gunners Field Notes",
  },
  description: "Matchday beleške o Arsenalu — iz ugla navijača.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr">
      <body className="min-h-screen bg-black text-white antialiased">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {/* Unutrašnji wrapper da sve ne bude u uglu */}
            <div className="mx-auto w-full max-w-5xl px-4 py-10">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
