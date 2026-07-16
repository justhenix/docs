import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import Image from "next/image";
import { RiGithubFill, RiTwitterXLine } from "@remixicon/react";
import "nextra-theme-docs/style.css";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://docs.henix.my.id"),
  title: {
    default: "Henix Docs",
    template: "%s | Henix Docs",
  },
  description: "Documentation for Henix projects, learning labs, and notes.",
  applicationName: "Henix Docs",
  appleWebApp: {
    title: "Docs",
    capable: false,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pageMap = await getPageMap();

  return (
    <html lang="en" suppressHydrationWarning>
      <Head faviconGlyph="H" />
      <body className={`${plusJakarta.variable} docs-shell`}>
        <Layout
          navbar={
            <Navbar
              logo={
                <span className="docs-brand">
                  <strong>Henix</strong>
                  <span className="docs-brand-separator" aria-hidden="true">
                    /
                  </span>
                  <span>Docs</span>
                </span>
              }
              projectLink="https://github.com/justhenix/docs"
            />
          }
          footer={
            <Footer>
              <div className="footer-container">
                <div className="footer-left">
                  <div className="footer-art" aria-hidden="true">
                    <Image
                      className="footer-box"
                      src="/images/box-optimized.webp"
                      alt=""
                      width="480"
                      height="480"
                      sizes="(max-width: 760px) 48vw, 220px"
                      loading="lazy"
                    />
                  </div>
                  <nav className="footer-links" aria-label="Footer navigation">
                    <a href="/">Overview</a>
                    <a href="/projects">Projects</a>
                    <a href="/labs">Learning Labs</a>
                    <a href="/notes">Notes</a>
                  </nav>
                </div>
                <div className="footer-right">
                  <div className="footer-socials" role="group" aria-label="Social profiles">
                    <a
                      href="https://github.com/justhenix"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                    >
                      <RiGithubFill aria-hidden="true" />
                    </a>
                    <a
                      href="https://x.com/heni0x"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Twitter X"
                    >
                      <RiTwitterXLine aria-hidden="true" />
                    </a>
                  </div>
                  <p className="copyright">&copy; {new Date().getFullYear()} Henix</p>
                  <p className="artist-credit">
                    Art by{" "}
                    <a href="https://www.instagram.com/heni0x/" target="_blank" rel="noreferrer">
                      @heni0x
                    </a>
                  </p>
                </div>
              </div>
            </Footer>
          }
          editLink="Edit this page on GitHub"
          feedback={{ content: "Question? Give us feedback" }}
          docsRepositoryBase="https://github.com/justhenix/docs/tree/main"
          pageMap={pageMap}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
