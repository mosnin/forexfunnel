import { CheckCircle2, XCircle } from "lucide-react";

const forList = [
  "Frustrated retail traders who keep losing money and don't know why",
  "9-5 employees who want financial freedom but don't know where to start",
  "Entrepreneurs looking to add a high-income stream that compounds fast",
  "People tired of watching their savings erode to inflation",
  "Anyone who's tried forex before and failed — our system fixes the EXACT mistakes",
  "Beginners with zero experience who want to learn the RIGHT way first",
  "High earners who want to put their capital to serious work",
  "Anyone ready to take full financial accountability and actually commit",
];

const notForList = [
  "Looking for a get-rich-quick overnight guarantee",
  "Not willing to put in 45–90 minutes per day to learn and trade",
  "Want someone else to do all the work for you",
  "Not serious about long-term wealth building",
];

export default function WhoThisIsFor() {
  return (
    <section className="py-20 bg-[#0a0a0a] relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[#39ff14]/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-[#39ff14] font-bold uppercase tracking-widest text-sm mb-3">
            Be Honest With Yourself
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
            Is This <span className="text-[#39ff14]">For You?</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Urban Trading isn&apos;t for everyone. We specifically engineered
            this for a very specific type of person. Read carefully.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* This IS for */}
          <div className="p-6 sm:p-8 rounded-2xl border border-[#39ff14]/20 bg-[#0d1a0d]">
            <h3 className="text-xl font-black text-[#39ff14] mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6" />
              This IS For You If...
            </h3>
            <ul className="space-y-4">
              {forList.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#39ff14] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-200 text-sm leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* This is NOT for */}
          <div className="p-6 sm:p-8 rounded-2xl border border-red-900/30 bg-[#1a0d0d]">
            <h3 className="text-xl font-black text-red-400 mb-6 flex items-center gap-2">
              <XCircle className="w-6 h-6" />
              This is NOT For You If...
            </h3>
            <ul className="space-y-4">
              {notForList.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400 text-sm leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 rounded-xl bg-red-950/30 border border-red-900/20">
              <p className="text-red-400 text-sm font-semibold">
                If that&apos;s not you — stop reading. This isn&apos;t for you
                and we&apos;d rather you not apply.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
