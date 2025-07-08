import type { Metadata } from "next";
import { Inter, Orbitron, Rajdhani, Source_Code_Pro, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const orbitron = Orbitron({ subsets: ["latin"], variable: '--font-orbitron' });
const rajdhani = Rajdhani({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: '--font-rajdhani' });
const sourceCodePro = Source_Code_Pro({ subsets: ["latin"], variable: '--font-source-code-pro' });
const firaCode = Fira_Code({ subsets: ["latin"], variable: '--font-fira-code' });

export const metadata: Metadata = {
  title: "BlackSider Society",
  description: "Se você cansou de sempre chegar atrasado nas oportunidades, é hora de descobrir onde elas nascem.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${orbitron.variable} ${rajdhani.variable} ${sourceCodePro.variable} ${firaCode.variable} font-rajdhani antialiased`}>
        {children}
      </body>
    </html>
  );
} 