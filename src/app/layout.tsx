import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { general_sans } from "./font";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joseph Akinlade",
  description:
    "Web developer skilled in Framer, Next.js, React, TypeScript, and JavaScript. Specializing in dynamic, high-performance web applications with a focus on interactive design and seamless user experiences.",
  generator: "Akyn",
  applicationName: "Akyn portfolio",
  referrer: "origin-when-cross-origin",
  keywords: ["Next.js", "React", "JavaScript", "framer"],
  authors: [{ name: "Joseph Akinlade", url: "https://akyn.dev" }],
  creator: "Joseph Akinlade",
  publisher: "Joseph Akinlade",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/icon.png" },
      new URL("/icon.png", "https://example.com"),
      { url: "/icon-dark.png", media: "(prefers-color-scheme: dark)" },
    ],
    shortcut: ["/shortcut-icon.png"],
    apple: [
      { url: "/apple-icon.png" },
      { url: "/apple-icon-x3.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon-precomposed.png",
      },
    ],
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Joseph Akinlade",
    description:
      "Web developer skilled in Framer, Next.js, React, TypeScript, and JavaScript. Specializing in dynamic, high-performance web applications with a focus on interactive design and seamless user experiences.",
    url: "https://akyn.dev",
    siteName: "Akyn",
    images: [
      {
        url: "https://nextjs.org/og.png", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://nextjs.org/og-alt.png", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "app",
    title: "Joseph Akinlade",
    description:
      "Web developer skilled in Framer, Next.js, React, TypeScript, and JavaScript. Specializing in dynamic, high-performance web applications with a focus on interactive design and seamless user experiences.",
    siteId: "1463402446688972801",
    creator: "@akyndev",
    creatorId: "1463402446688972801",
    images: {
      url: "https://nextjs.org/og.png",
      alt: "Next.js Logo",
    },
    app: {
      name: "twitter_app",
      id: {
        iphone: "twitter_app://iphone",
        ipad: "twitter_app://ipad",
        googleplay: "twitter_app://googleplay",
      },
      url: {
        iphone: "https://iphone_url",
        ipad: "https://ipad_url",
      },
    },
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
