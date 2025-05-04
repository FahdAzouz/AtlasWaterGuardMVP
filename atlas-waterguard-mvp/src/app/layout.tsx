import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atlas WaterGuard - Smart Water Management for Moroccan Farmers",
  description: "Atlas WaterGuard is a climate-smart water management platform that empowers Moroccan farmers to combat water scarcity through AI-driven irrigation, IoT soil sensors, and economic incentives.",
  keywords: "water management, irrigation, Morocco, agriculture, farming, IoT, AI, water conservation, smart agriculture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
