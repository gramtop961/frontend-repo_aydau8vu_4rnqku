import { Ticket, Calendar, Shield, CreditCard } from 'lucide-react';

const features = [
  {
    title: 'Instant ticketing',
    description: 'Launch sales in minutes with beautiful, branded tickets and smart capacity controls.',
    icon: Ticket,
  },
  {
    title: 'Seamless scheduling',
    description: 'Create single or multi-day events, VIP tiers, and timed entry with ease.',
    icon: Calendar,
  },
  {
    title: 'Secure by design',
    description: 'Built-in fraud protection and QR verification to keep every entry legit.',
    icon: Shield,
  },
  {
    title: 'Fast checkout',
    description: 'Optimized payments with cards and wallets for higher conversions.',
    icon: CreditCard,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Everything you need to sell out</h2>
          <p className="mt-3 text-white/70">Powerful tools designed for creators, venues, and promoters of all sizes.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.description}</p>
              <div className="mt-4 h-px bg-gradient-to-r from-white/10 via-white/30 to-white/10" />
              <div className="mt-4 text-xs text-white/60">Included on all plans</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
