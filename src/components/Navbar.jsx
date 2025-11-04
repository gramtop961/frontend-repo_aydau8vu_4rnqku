import { ArrowRight, Ticket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-slate-900">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-blue-600/10 ring-1 ring-blue-600/20 text-blue-600">
            <Ticket className="h-4 w-4" />
          </span>
          <span className="font-semibold tracking-tight">Ticketin</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition">Features</a>
          <a href="#how" className="hover:text-slate-900 transition">How it works</a>
          <a href="#pricing" className="hover:text-slate-900 transition">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900">
            Sign in
          </button>
          <button className="inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-semibold hover:bg-blue-500 transition">
            Get tickets <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
