export function AnnouncementBar() {
  return (
    <a
      href="/waitlist"
      className="announce-bar block group"
    >
      <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-2.5 flex items-center justify-center gap-3 text-[12.5px] md:text-[13px]">
        <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/15 text-white font-medium text-[10.5px] tracking-[0.12em] uppercase">
          <SparkleIcon />
          New
        </span>
        <span className="text-white/90">
          <span className="font-medium text-white">Introducing Accountables <img src="/prod_icon.svg" alt="" style={{ display: 'inline-block', height: '1em', width: 'auto', verticalAlign: '-0.1em', filter: "brightness(0) invert(1)"}} /></span>
          <span className="hidden md:inline"> - the autonomous month-end. </span>
        </span>
        <span className="inline-flex items-center gap-1 font-medium text-white group-hover:gap-1.5 transition-all">
          Schedule a Demo
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12h14M13 5l7 7-7 7"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </a>
  );
}

function SparkleIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l2.4 6.4L21 11l-6.6 2.6L12 20l-2.4-6.4L3 11l6.6-2.6L12 2z" />
    </svg>
  );
}
