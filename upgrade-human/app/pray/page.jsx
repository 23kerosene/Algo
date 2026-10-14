import { PRAY_URL } from "@/lib/site";

export default function Pray() {
  return (
    <main className="stage">
      <video
        className="bg-video"
        src="/videos/skeleton.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />

      {/* Same decorative icons, dimmed like in the design */}
      <header className="topbar topbar-dim" aria-hidden="true">
        <img src="/insta.png" alt="" className="icon" />
        <img src="/asterisk.png" alt="" className="icon icon-asterisk" />
        <img src="/menu.png" alt="" className="icon" />
      </header>

      {/* The one functional element */}
      <a
        className="pray-btn"
        href={PRAY_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Pray"
      >
        <img src="/pray.png" alt="PRAY" />
      </a>
    </main>
  );
}
