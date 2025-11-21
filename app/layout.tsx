import type { Metadata } from "next";
import { Parkinsans, Satisfy } from "next/font/google";
import "./globals.css";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
import LightRaysClientWrapper from "@/components/LightRaysClientWrapper/LightRaysClientWrapper";
import GoogleAnalytics from "@/components/Analytics/GoogleAnalitycs";

// ############################################################################

const parkinsans = Parkinsans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-parkinsans",
  display: "swap",
});

const marker = Satisfy({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-marker",
  display: "swap",
});

// ############################################################################

const url = "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg";

export const metadata: Metadata = {
  title: "NoteHub",
  description:
    "A simple and efficient application for managing personal notes.",
  openGraph: {
    title: "NoteHub App",
    description: "A simple application for managing personal notes.",
    url: "https://notehub-project-front.vercel.app/",
    siteName: "NoteHub",
    images: [
      {
        url,
        width: 1200,
        height: 630,
        alt: "NoteHub App",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NoteHub App",
    description: "A simple application for managing personal notes.",
    images: [url],
  },
};

// ############################################################################

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${parkinsans.variable} ${marker.variable}`}>
        <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_ID!} />
        <LightRaysClientWrapper />
        <TanStackProvider>
          <AuthProvider>
            <div className="relative z-100 ">
              {children}
              {modal}
            </div>
          </AuthProvider>
        </TanStackProvider>
      </body>
    </html>
  );
}
