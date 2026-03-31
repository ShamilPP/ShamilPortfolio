import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shamil PP – Flutter Developer",
  description:
    "Self-taught Flutter Developer with 3+ years of experience building high-quality mobile applications. Specializing in Flutter, Firebase, and scalable architecture.",
  keywords: [
    "Flutter Developer",
    "Mobile App Developer",
    "Shamil PP",
    "Dart",
    "Firebase",
    "Portfolio",
  ],
  authors: [{ name: "Shamil PP" }],
  openGraph: {
    title: "Shamil PP – Flutter Developer",
    description:
      "Self-taught Flutter Developer with 3+ years of experience building high-quality mobile applications.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shamil PP – Flutter Developer",
    description:
      "Self-taught Flutter Developer with 3+ years of experience building high-quality mobile applications.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/assets/favicon.png" />
        {/* Redirect old project.html?project=xyz URLs to /project/xyz */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var p=window.location.pathname;var s=new URLSearchParams(window.location.search);if((p==='/project.html'||p==='/project')&&s.get('project')){window.location.replace('/project/'+s.get('project'))}})()`,
          }}
        />
        {/* Prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme:dark)').matches;if(s==='light'||(!s&&!d)){document.documentElement.classList.add('light-mode')}}catch(e){}})()`,
          }}
        />
      </head>
      <body
        className="font-[family-name:var(--font-inter)] antialiased"
        suppressHydrationWarning
      >
        <ThemeProvider>{children}</ThemeProvider>

        {/* Microsoft Clarity */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script","ntea3ksvlu")`,
          }}
        />
      </body>
    </html>
  );
}
