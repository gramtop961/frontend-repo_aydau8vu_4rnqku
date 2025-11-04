import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full bg-white text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
              Futuristic ticketing for unforgettable events
            </span>
            <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
              Sell out your next event with Ticketin
            </h1>
            <p className="mt-5 text-slate-600 text-lg leading-relaxed">
              A sleek, secure, and immersive way to sell and scan tickets. Delight your audience with a holographic digital pass that feels like the future.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 text-white px-5 py-3 text-sm font-semibold hover:bg-blue-500 transition"
              >
                Explore features
              </a>
              <a
                href="#how"
                className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
              >
                How it works
              </a>
            </div>
            <div className="mt-10 flex items-center gap-4 text-sm text-slate-600">
              <div className="flex -space-x-2">
                <img src="https://i.pravatar.cc/40?img=1" className="h-8 w-8 rounded-full ring-2 ring-white" alt="" />
                <img src="https://i.pravatar.cc/40?img=2" className="h-8 w-8 rounded-full ring-2 ring-white" alt="" />
                <img src="https://i.pravatar.cc/40?img=3" className="h-8 w-8 rounded-full ring-2 ring-white" alt="" />
              </div>
              <span>Trusted by 5,000+ event organizers</span>
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -top-10 -right-10 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="relative rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden">
              <div className="aspect-[16/10] w-full">
                <Spline scene="https://prod.spline.design/zks9uYILDPSX-UX6/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              </div>
              <div className="p-4 border-t border-slate-200">
                <p className="text-sm text-slate-600">Interactive preview of your holographic ticket</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
