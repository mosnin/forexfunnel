"use client";

import { TrendingUp } from "lucide-react";

const results = [
  {
    src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEihlWoNDS6RT733nZoeny8f23uVxZza7Mlk8EMELVozkvD__0S-t2uXmUVyrxRJpXpfD9hJX-o3TnY3ToVYDJd88YmeqwxVyvxZUWCNmlMhZCEuPldwRM1p-tfQntKISggs__cNh0_G_tuQvKwsdH7S3_EHKalmJcNbNdJfFew7EJXw26ZhDBqx3d29SKtW/s320/IMG_0739.jpg",
    caption: "Marcus T. — $41,280 single month profit",
    sub: "Started with $5,000 | Month 3",
    tag: "+826%",
  },
  {
    src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjDl8zEH4-jqkjKEpWq6RAQ8RcyRlrHZbI2TQo4eBQcphflqCkrEkZeyhnrJVnvMB4O8QhPBjD8mzePShVTyFH1KeUJzaR5RmMhyphenhyphenc23H8Me7_z2heUHKWKMTcmhpYAtup-IbhA6R-_8Jqlk_2V9R2psyNVfqo8HBRtevIpKAeAUB0Ob4i5vlLvCiduF7myg/s320/IMG_0742.jpg",
    caption: "Aisha K. — $68,450 account growth",
    sub: "Started with $3,000 | 5 months",
    tag: "+2,281%",
  },
  {
    src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhgVXQNynpOhHgsBo9yEHfuZF1y4sO4W2Z0TWvhM0CX4rLq-dxrqQbR5I565OBTglXo9vyiAKUOiYCRfrToMOg6dAMRPGWD8ex5yIOrav2BA7Ihydf_cwTgyBAkS3IrUXCYOAuUhGmVDGaU9luv4cNq5N9XEJuU8gYiNs9aRcew3P5RXLvxxsEoMgXeX15C/s320/IMG_0743.jpg",
    caption: "James O. — $28,700 quarterly return",
    sub: "Started with $10,000 | 3 months",
    tag: "+287%",
  },
  {
    src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi6AG8yF9srPurznJjhTO0Gk7Q3hHIUYwcs9zgkclrXFZI0ypd4bcM9OEvmwpkCEZThHYuMulHwobUvb655E8T9Pg4dHF8EmB4tMLqyoSYkepqVir7zK-BJMki-npnhNLxBq5655IDjrhqyTojcWxOolz55eyKFmC0_Z34pesYYtCERnIM-3OZRBodwyxWx/s320/IMG_0738.jpg",
    caption: "Sofia R. — $112,000 year-one total",
    sub: "Started with $8,000 | 12 months",
    tag: "+1,400%",
  },
  {
    src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgqOkm4cLrW0__kUhunWpfcSxrhXeelIOXtmRY7-3OggLcMIHxmf3WD2PmMdCrmb-pf_bpQCUrqV_uMlsTE-T7rpfOtAmDglrv_uT0oEPvtoxO2FpJoLtZvruhj4Zokfb-Sm7zVjJ7ztLjaePzvvluIZGQMCa4f5jffrErNO1Kqbc5FdJEOOJ-PcIajg_fo/s320/IMG_0736.jpg",
    caption: "David M. — $82,000 first year trading",
    sub: "Former construction worker | 12 months",
    tag: "7-Figure Path",
  },
  {
    src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEigyphOABhbFiMN17j3Y4GMyi0H0H51Qw3ts4qg8MRYwl87naR4Asd34i6LpctSRVJW4J90qFCD_qEroT5uGeElhj_KO2s7g1iSfQHDqZ8r2ntctMuiQsAu_3c71738O2s4rBeW-ePrY-KyDZUnVSGsMI6h0rE39iEA8V-5xdIO963w58NJOgNOA3xtFTqC/s320/IMG_0735.jpg",
    caption: "Ryan S. — Turned $2k into $47k",
    sub: "After 2 failed accounts | Month 7",
    tag: "+2,350%",
  },
  {
    src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgj8s8eMW2AwAnZCu9MyXuhVnH-uSNmTkg-Zh4IifwiQSzn8y3QaZKGcynv6jT9z5iok8aj14_0NhI16HNt25zPwYtefq2j4vbc8mjBQQXkJ2BMPJ0pqWjYFy1aNiKRmtyZ0XzSaaT91bH_A2Vk81qy1k3R7kOLLIkRX6oOIU3Wqt30TBcCdl2zsI3lt2mP/s320/IMG_0741.jpg",
    caption: "Priya V. — $31,500 single trade",
    sub: "Funded account | Month 5",
    tag: "Life-Changing",
  },
  {
    src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi4QZilgfNVZv5zCb-1hhR6xlIZJVBVGLiZRezYLZPSDMaGD5_qcQLITzzJkCKLa6HK1rsbjXWzxU04d8flZnSIe8VKTN7J9o-FLLcUxiKG6F2aJCDl78Gl8bY8zlRGxJ4g1hBGchSe3c2DZWGrMeQr0Nz33L-nltAhP78-a2S_e8tpwmsNiC4R6XIRF3cm/s320/IMG_0737.jpg",
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
                {/* eslint-disable-next-line @next/next/no-img-element */}
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
