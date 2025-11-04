import { ArrowRight, Ticket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-white">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/20">
            <Ticket className="h-4 w-4" />
          </span>
          <span className="font-semibold tracking-tight">Ticketin</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#how" className="hover:text-white transition">How it works</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-white/90 hover:text-white">
            Sign in
          </button>
          <button className="inline-flex items-center gap-2 rounded-md bg-white text-black px-4 py-2 text-sm font-semibold hover:bg-white/90 transition">
            Get tickets <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
