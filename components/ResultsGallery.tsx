import { TrendingUp } from "lucide-react";

const results = [
  {
    src: "https://PLACEHOLDER_RESULT_1.jpg",
    caption: "Marcus T. — $41,280 single month profit",
    sub: "Started with $5,000 | Month 3",
    tag: "+826%",
  },
  {
    src: "https://PLACEHOLDER_RESULT_2.jpg",
    caption: "Aisha K. — $68,450 account growth",
    sub: "Started with $3,000 | 5 months",
    tag: "+2,281%",
  },
  {
    src: "https://PLACEHOLDER_RESULT_3.jpg",
    caption: "James O. — $28,700 quarterly return",
    sub: "Started with $10,000 | 3 months",
    tag: "+287%",
  },
  {
    src: "https://PLACEHOLDER_RESULT_4.jpg",
    caption: "Sofia R. — $112,000 year-one total",
    sub: "Started with $8,000 | 12 months",
    tag: "+1,400%",
  },
  {
    src: "https://PLACEHOLDER_RESULT_5.jpg",
    caption: "David M. — $82,000 first year trading",
    sub: "Former construction worker | 12 months",
    tag: "7-Figure Path",
  },
  {
    src: "https://PLACEHOLDER_RESULT_6.jpg",
    caption: "Ryan S. — Turned $2k into $47k",
    sub: "After 2 failed accounts | Month 7",
    tag: "+2,350%",
  },
  {
    src: "https://PLACEHOLDER_RESULT_7.jpg",
    caption: "Priya V. — $31,500 single trade",
    sub: "Funded account | Month 5",
    tag: "Life-Changing",
  },
  {
    src: "https://PLACEHOLDER_RESULT_8.jpg",
    caption: "Carlos M. — $22,000 month 4",
    sub: "First-time trader | Month 4",
    tag: "+440%",
  },
];

export default function ResultsGallery() {
  return (
    <section className="py-20 bg-[#0a0a0a] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#39ff14] font-bold uppercase tracking-widest text-sm mb-3">
            Student Proof — Not Hypothetical
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Real Account Screenshots.
            <br />
            <span className="text-[#00f0ff]">Real People. Real Profits.</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            These are verified trading account screenshots and lifestyle results
            submitted by our students. We don&apos;t cherry-pick — we track
            every result.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {results.map((r, i) => (
            <div
              key={i}
              className="group relative rounded-xl overflow-hidden border border-[#1a1a1a] bg-[#0d0d0d] hover:border-[#39ff14]/30 transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Image placeholder */}
              <div className="relative aspect-[4/3] bg-[#111] overflow-hidden">
                <img
                  src={r.src}
                  alt={r.caption}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0d1a0d] to-[#111] p-4">
                          <div class="text-4xl mb-2">📊</div>
                          <div class="text-[#39ff14] font-black text-lg">${r.tag}</div>
                          <div class="text-gray-500 text-xs text-center mt-1">[Trading Account Screenshot]</div>
                        </div>
                      `;
                    }
                  }}
                />
                {/* Tag overlay */}
                <div className="absolute top-2 right-2 bg-[#39ff14] text-black text-xs font-black px-2 py-1 rounded-md">
                  {r.tag}
                </div>
              </div>

              {/* Caption */}
              <div className="p-3">
                <p className="text-white font-semibold text-sm">{r.caption}</p>
                <p className="text-gray-500 text-xs mt-0.5">{r.sub}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 text-xs mt-8">
          * Individual results vary. Trading involves risk. Past performance
          does not guarantee future results.
        </p>
      </div>
    </section>
  );
}
