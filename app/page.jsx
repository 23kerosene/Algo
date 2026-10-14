import Link from "next/link";

export default function Home() {
  return (
    <main className="stage">
      <video
        className="bg-video"
        src="/videos/pixels.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />

      {/* Decorative icons — intentionally not interactive */}
      <header className="topbar" aria-hidden="true">
        <img src="/insta.png" alt="" className="icon" />
        <img src="/asterisk.png" alt="" className="icon icon-asterisk" />
        <img src="/menu.png" alt="" className="icon" />
      </header>

      {/*
        Tapping the asterisk / headline enters page 2 (/pray).
        This is the only navigation on the page — delete the <Link>
        wrapper and make it a plain <div> if page 2 should be
        reached some other way.
      */}
      <Link href="/pray" className="center" aria-label="Enter">
        <img src="/asterisk.png" alt="" className="center-asterisk" />
        <h1 className="headline">
          <span>UPGRADE</span>
          <span>HUMAN</span>
        </h1>
      </Link>
    </main>
  );
}
