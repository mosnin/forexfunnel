"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Is this suitable for complete beginners?",
    a: "Absolutely. In fact, we prefer teaching beginners — because they haven't built bad habits yet. Our 16-week curriculum starts from absolute zero: what is forex, how do currency pairs work, what moves markets. By week 4, you'll understand the market better than most people who've been trading for years. We have hundreds of students with zero prior experience who are now full-time traders.",
  },
  {
    q: "How much time do I need per day?",
    a: "Minimum 45–90 minutes per day, 5 days a week. Forex markets are most active during the London session (8am–12pm GMT) and New York session (1pm–5pm GMT). Our top students usually dedicate 2 hours: 30 min of pre-market analysis, 60 min of live trading, and 30 min of journaling. The live trading room runs daily so you can watch experienced traders execute in real time.",
  },
  {
    q: "How much starting capital do I need?",
    a: "We recommend starting with $1,000–$5,000 in a live account, but our course works with any amount. Many students start with prop firm challenges (which we teach you to pass) and trade up to $100,000+ in funded capital without risking their own money beyond the challenge fee. Capital is a tool — knowledge is the edge.",
  },
  {
    q: "What if I've failed at trading before?",
    a: "That's our most common student profile. Almost everyone who joins Urban Trading has lost money trying to figure this out alone. The difference is our system is institutional-grade — we teach smart money concepts, order flow analysis, and liquidity theory. Not RSI and support/resistance like every other course that failed you. If you failed before, it's because you had the wrong map, not because you're incapable.",
  },
  {
    q: "What if I lose money trading your system?",
    a: "Risk management is the first thing we teach — not an afterthought. Every trade has a defined 1–2% account risk maximum. If you follow our rules, a losing streak cannot wipe your account. We've documented case studies of students who hit 10-trade losing streaks and only lost 15% of their account. The math protects you. That said, trading always involves risk — we never promise specific returns.",
  },
  {
    q: "Do I get direct access to mentors?",
    a: "Yes. Inside the private Discord you can tag mentors and get replies on your charts and trade ideas within hours — usually faster. Additionally, the weekly Q&A is live screen-sharing where senior mentors review your exact charts and explain their reasoning. And if you secure the 1-on-1 strategy call (limited availability), you get a dedicated private session.",
  },
  {
    q: "Is the trade copier legal and safe?",
    a: "Yes. Our trade signals and copier work through MT4/MT5 standard signal technology or simple Discord alerts — nothing that violates broker terms. We recommend specific brokers who are copier-friendly. The copier is a learning tool: you see the trade, the logic is explained, and you learn while profits build.",
  },
  {
    q: "What markets do you trade?",
    a: "Primary focus is forex (currency pairs: EUR/USD, GBP/JPY, XAU/USD gold, etc.) as it's the most liquid market in the world with tight spreads and 24-hour access. We also cover indices (US30, NAS100) and commodities. The smart money framework we teach works on any liquid market.",
  },
  {
    q: "How long do I have access?",
    a: "Lifetime. Not '12 months', not '2 years'. Lifetime. Every update, every new module, every course revision is included. Markets change, strategies evolve — your access doesn't expire. We've been running this program for 4 years and every original student still has full access.",
  },
  {
    q: "What's your refund policy?",
    a: "30 days, full money-back guarantee. If you complete the first 4 weeks of content, attend at least 3 live sessions, and genuinely implement the system without seeing results — we'll refund every penny and let you keep the PDF playbook. We're that confident. We've processed fewer than 12 refunds across 3,000+ students.",
  },
];

export default function FAQAccordion() {
  return (
    <section className="py-20 bg-[#080808]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#39ff14] font-bold uppercase tracking-widest text-sm mb-3">
            Got Questions?
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400">
            We&apos;ve answered every question our 3,000+ students asked before
            joining. If yours isn&apos;t here, it will be answered in the free
            training.
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-[#1a1a1a] rounded-xl px-5 bg-[#0d0d0d] hover:border-[#39ff14]/20 transition-colors"
            >
              <AccordionTrigger className="text-left text-white text-sm sm:text-base py-5 hover:no-underline">
                <span className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-[#39ff14] flex-shrink-0 mt-0.5" />
                  {faq.q}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-sm sm:text-base pb-5 pl-8">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm">
            Still have questions? They&apos;re answered in the free training
            above. Watch it now.
          </p>
        </div>
      </div>
    </section>
  );
}
