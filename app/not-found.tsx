import Image from "next/image";
import Link from "next/link";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["700"],
});

export default function NotFound() {
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
          <span className={`error-code-overlay ${robotoMono.className}`}>404</span>
        </div>
        <div className="error-copy">
          <h1 id="error-title">Seems you&apos;re lost.</h1>
          <p>Let&apos;s bring you back.</p>
          <div className="error-actions">
            <Link className="button" href="/">
              Go back
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
