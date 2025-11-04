import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 60, damping: 12 } },
};

export default function Hero() {
  return (
    <section className="relative w-full bg-white text-slate-900 overflow-hidden">
      {/* Animated ambient gradients */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl"
        animate={{ y: [0, -10, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-sky-400/20 blur-3xl"
        animate={{ y: [0, 12, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Copy */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.span
              variants={item}
              className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm"
            >
              Futuristic ticketing for unforgettable events
            </motion.span>
            <motion.h1
              variants={item}
              className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight"
            >
              Sell out your next event with Ticketin
            </motion.h1>
            <motion.p variants={item} className="mt-5 text-slate-600 text-lg leading-relaxed">
              A sleek, secure, and immersive way to sell and scan tickets. Delight your audience with a holographic
              digital pass that feels like the future.
            </motion.p>
            <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 text-white px-5 py-3 text-sm font-semibold hover:bg-blue-500 transition shadow-sm hover:shadow"
              >
                Explore features
              </a>
              <a
                href="#how"
                className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
              >
                How it works
              </a>
            </motion.div>
            <motion.div variants={item} className="mt-10 flex items-center gap-4 text-sm text-slate-600">
              <div className="flex -space-x-2">
                <img src="https://i.pravatar.cc/40?img=1" className="h-8 w-8 rounded-full ring-2 ring-white" alt="" />
                <img src="https://i.pravatar.cc/40?img=2" className="h-8 w-8 rounded-full ring-2 ring-white" alt="" />
                <img src="https://i.pravatar.cc/40?img=3" className="h-8 w-8 rounded-full ring-2 ring-white" alt="" />
              </div>
              <span>Trusted by 5,000+ event organizers</span>
            </motion.div>
          </motion.div>

          {/* 3D Card */}
          <div className="relative">
            {/* Floating badges */}
            <motion.div
              className="absolute -top-6 left-6 z-10 rounded-full bg-white/80 backdrop-blur border border-slate-200 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              Live 3D
            </motion.div>
            <motion.div
              className="absolute -bottom-6 right-6 z-10 rounded-full bg-white/80 backdrop-blur border border-slate-200 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              Interactive
            </motion.div>

            {/* Glow */}
            <div className="pointer-events-none absolute -top-10 -right-10 h-64 w-64 rounded-full bg-blue-500/30 blur-3xl" />

            {/* Glass card with gradient border */}
            <div className="relative rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-xl shadow-xl overflow-hidden">
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(1200px_400px_at_80%_-20%,rgba(59,130,246,0.15),transparent)]" />
              <div className="aspect-[16/10] w-full">
                <Spline
                  scene="https://prod.spline.design/utrirTwDrFc8TLoE/scene.splinecode"
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
              <div className="p-4 border-t border-slate-200">
                <p className="text-sm text-slate-600">Minimalist robotic pass — drag to explore in 3D</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
