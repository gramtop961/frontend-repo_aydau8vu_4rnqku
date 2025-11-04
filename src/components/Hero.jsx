import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zks9uYILDPSX-UX6/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft glow gradient overlay that doesn't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(59,130,246,0.25),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
            Futuristic ticketing for unforgettable events
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            Sell out your next event with Ticketin
          </h1>
          <p className="mt-5 text-white/80 text-lg leading-relaxed">
            A sleek, secure, and immersive way to sell and scan tickets. Delight your audience with a holographic digital pass that feels like the future.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-md bg-white text-black px-5 py-3 text-sm font-semibold hover:bg-white/90 transition"
            >
              Explore features
            </a>
            <a
              href="#how"
              className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              How it works
            </a>
          </div>
          <div className="mt-10 flex items-center gap-4 text-sm text-white/70">
            <div className="flex -space-x-2">
              <img src="https://i.pravatar.cc/40?img=1" className="h-8 w-8 rounded-full ring-2 ring-black/50" alt="" />
              <img src="https://i.pravatar.cc/40?img=2" className="h-8 w-8 rounded-full ring-2 ring-black/50" alt="" />
              <img src="https://i.pravatar.cc/40?img=3" className="h-8 w-8 rounded-full ring-2 ring-black/50" alt="" />
            </div>
            <span>Trusted by 5,000+ event organizers</span>
          </div>
        </div>
      </div>
    </section>
  );
}
