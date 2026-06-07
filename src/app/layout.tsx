import type { Metadata, Viewport } from "next";
import { LoadingScreen } from "@/components/loading-screen";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://achref-ouerchfeni.com"),
  title: {
    default: "Achref Ouerchfeni — IT Engineer",
    template: "%s | Achref Ouerchfeni",
  },
  description:
    "Premium personal brand website for Achref Ouerchfeni, an IT Engineer focused on cybersecurity, artificial intelligence, automation and technology consulting.",
  keywords: ["IT Engineer", "Cybersecurity", "Artificial Intelligence", "Automation", "Technology Consulting", "Rome"],
  authors: [{ name: "Achref Ouerchfeni" }],
  creator: "Achref Ouerchfeni",
  openGraph: {
    title: "Achref Ouerchfeni — IT Engineer",
    description: "Cybersecurity • Artificial Intelligence • Automation • Technology Consulting",
    type: "website",
    locale: "en_US",
    siteName: "Achref Ouerchfeni",
  },
  twitter: {
    card: "summary_large_image",
    title: "Achref Ouerchfeni — IT Engineer",
    description: "Cybersecurity • Artificial Intelligence • Automation • Technology Consulting",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#050506",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <a href="#home" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[120] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-black">Skip to content</a>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Achref Ouerchfeni",
              jobTitle: "IT Engineer",
              address: { "@type": "PostalAddress", addressLocality: "Rome", addressCountry: "Italy" },
              knowsAbout: ["Cybersecurity", "Artificial Intelligence", "Automation", "Technology Consulting", "Cloud & DevOps"],
              url: "https://achref-ouerchfeni.com",
            }),
          }}
        />
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
