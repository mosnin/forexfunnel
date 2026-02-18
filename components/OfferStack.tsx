import { CheckCircle2, Gift, Zap, Star } from "lucide-react";

const offerItems = [
  {
    type: "core",
    title: "Urban Trading Mastermind Group",
    description:
      "Live trading room — watch our senior traders execute live trades every session with full commentary. Daily pre-market setups delivered to your Discord before the London open.",
    value: "$4,997",
    icon: "🏛️",
  },
  {
    type: "core",
    title: "16-Week Accelerated Trading Accelerator",
    description:
      "The complete A-to-Z forex education system. Market structure, smart money concepts, risk management, psychology, journaling systems, and advanced entry models. 120+ hours of content.",
    value: "$3,997",
    icon: "📈",
  },
  {
    type: "core",
    title: "Private Discord Community + Trade Copier",
    description:
      "24/7 access to our private community of 3,000+ serious traders. Get trade signals, setups, and live copy trading from our verified analysts. Never trade alone again.",
    value: "$1,997",
    icon: "💬",
  },
  {
    type: "core",
    title: "Weekly Live Q&A Sessions",
    description:
      "Every week, bring your charts, your losses, your questions — our senior mentors will review them live. No question is too dumb. Get unstuck instantly.",
    value: "$2,997",
    icon: "🎯",
  },
  {
    type: "core",
    title: "Lifetime Updates & Access",
    description:
      "Markets evolve. Your education doesn't stop. Every module update, new strategy release, and market condition course gets added to your account — forever. Zero recurring fees.",
    value: "$1,497",
    icon: "♾️",
  },
  {
    type: "bonus",
    title: "BONUS: 1-on-1 Strategy Call (60 Min)",
    description:
      "One private, dedicated session with one of our senior trading mentors. They will review your exact account, your trading history, and build a custom plan for your situation. LIMITED availability.",
    value: "$1,997",
    icon: "📞",
    limited: true,
  },
  {
    type: "bonus",
    title: "BONUS: Custom Algo Toolkit (Urban Sentinel)",
    description:
      "Our proprietary MT4/MT5 indicator suite. Automatic supply/demand zones, smart money divergence alerts, liquidity sweep detector, and economic calendar overlay. Runs 24/7.",
    value: "$2,497",
    icon: "🤖",
  },
  {
    type: "bonus",
    title: "BONUS: Urban Trading Playbook (PDF)",
    description:
      "The exact 47-page playbook our top traders follow daily. Pre-session checklist, trade journal templates, entry/exit rules, psychology frameworks. Print it. Live by it.",
    value: "$497",
    icon: "📘",
  },
];

export default function OfferStack() {
  const totalValue = "$20,476";

  return (
    <section className="py-20 bg-[#080808] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#39ff14]/[0.02] via-transparent to-[#00f0ff]/[0.02] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#39ff14] font-bold uppercase tracking-widest text-sm mb-3">
            Everything You Get
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            The Urban Trading{" "}
            <span className="text-[#39ff14]">Complete Stack</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Every single component is designed to eliminate excuses and compress
            your timeline from beginner to consistently profitable trader.
          </p>
        </div>

        {/* Offer items */}
        <div className="space-y-4 mb-10">
          {offerItems.map((item, i) => (
            <div
              key={i}
              className={`relative p-5 sm:p-6 rounded-2xl border transition-all hover:scale-[1.01] group ${
                item.type === "bonus"
                  ? "border-[#00f0ff]/25 bg-gradient-to-r from-[#001a1f] to-[#0d0d0d]"
                  : "border-[#39ff14]/15 bg-[#0d0d0d]"
              }`}
            >
              {item.limited && (
                <div className="absolute -top-3 right-4 bg-red-600 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wide">
                  Limited Availability
                </div>
              )}
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="text-3xl flex-shrink-0">{item.icon}</div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3
                      className={`font-black text-lg ${
                        item.type === "bonus"
                          ? "text-[#00f0ff]"
                          : "text-white"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <div className="flex-shrink-0">
                      <span className="text-gray-500 line-through text-sm">
                        Value: {item.value}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <CheckCircle2
                  className={`w-6 h-6 flex-shrink-0 ${
                    item.type === "bonus" ? "text-[#00f0ff]" : "text-[#39ff14]"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Total value block */}
        <div className="relative p-6 sm:p-8 rounded-2xl border-2 border-[#39ff14] bg-[#0d1a0d] text-center">
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{ boxShadow: "0 0 60px rgba(57,255,20,0.15)" }}
          />
          <p className="text-gray-400 uppercase tracking-widest text-sm mb-2">
            Total Combined Value
          </p>
          <p className="text-5xl sm:text-6xl font-black text-gray-500 line-through mb-2">
            {totalValue}
          </p>
          <p className="text-[#39ff14] font-bold text-xl mb-2">
            Your investment today is a{" "}
            <span className="text-white font-black text-2xl">fraction</span> of
            that.
          </p>
          <p className="text-gray-400 text-sm">
            Scroll down to see today&apos;s limited-time pricing.
          </p>
        </div>
      </div>
    </section>
  );
}
