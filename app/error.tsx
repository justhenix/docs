"use client";

import Image from "next/image";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="docs-error-page">
      <section className="error-layout" aria-labelledby="error-title">
        <div className="error-visual" aria-hidden="true">
          <Image
            src="/images/henix-error-v5.webp"
            alt=""
            width={900}
            height={900}
            sizes="(max-width: 767px) 88vw, 420px"
            priority
          />
          <span className={`error-code-overlay ${robotoMono.className}`}>500</span>
        </div>
        <div className="error-copy">
          <h1 id="error-title">Something went sideways.</h1>
          <p>The page hit a snag. Give it another shot.</p>
          <div className="error-actions">
            <button className="button" type="button" onClick={reset}>
              Try again
            </button>
            <a className="button button-secondary" href="/">
              Go back
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
