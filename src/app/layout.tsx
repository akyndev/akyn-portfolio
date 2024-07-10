import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/seo";
import type { Metadata } from "next";
import { general_sans } from "./font";
import "./globals.css";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  generator: siteConfig.owner,
  applicationName: siteConfig.name,
  referrer: "origin-when-cross-origin",
  keywords: siteConfig.keywords,
  creator: siteConfig.owner,
  publisher: siteConfig.owner,
  authors: [{ name: siteConfig.owner, url: siteConfig.url }],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    siteId: "1463402446688972801",
    creator: "@akyndev",
    creatorId: "1463402446688972801",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("", general_sans.className)}
        suppressHydrationWarning={true}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
