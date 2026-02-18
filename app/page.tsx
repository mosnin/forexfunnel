import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import ResultsGrid from "@/components/ResultsGrid";
import TestimonialMarquee from "@/components/TestimonialMarquee";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import OfferStack from "@/components/OfferStack";
import ResultsGallery from "@/components/ResultsGallery";
import ProblemSolve from "@/components/ProblemSolve";
import TestimonialCards from "@/components/TestimonialCards";
import FAQAccordion from "@/components/FAQAccordion";
import FinalCTA from "@/components/FinalCTA";

// Divider component
function SectionDivider() {
  return (
    <div className="w-full h-px bg-gradient-to-r from-transparent via-[#39ff14]/20 to-transparent" />
  );
}

export default function HomePage() {
  return (
    <main className="bg-[#080808] min-h-screen">
      {/* Step 1: Hero */}
      <Hero />

      <SectionDivider />

      {/* Step 2: Video */}
      <VideoSection />

      <SectionDivider />

      {/* Step 3: Results Grid (proof numbers) */}
      <ResultsGrid />

      <SectionDivider />

      {/* Step 4: Testimonial Marquee */}
      <TestimonialMarquee />

      <SectionDivider />

      {/* Step 5: Who This Is For */}
      <WhoThisIsFor />

      <SectionDivider />

      {/* Step 6: Offer Stack */}
      <OfferStack />

      <SectionDivider />

      {/* Step 7: Results Gallery */}
      <ResultsGallery />

      <SectionDivider />

      {/* Step 8: Problem-Agitate-Solve long copy */}
      <ProblemSolve />

      <SectionDivider />

      {/* Step 9: More Testimonials (cards) */}
      <TestimonialCards />

      <SectionDivider />

      {/* Step 10: FAQ */}
      <FAQAccordion />

      <SectionDivider />

      {/* Step 11: Final CTA with countdown */}
      <FinalCTA />

      {/* Footer */}
      <footer className="bg-[#060606] border-t border-[#111] py-10 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg5uqGbeCAJQVBFxFxjGj-DqNODkBf6s6sPhlT45PKy8KlyqB1Rq46_3mR4FLEgTkB2rcZMEf_uvDQbkqRDKoMi1_DprP-oQbj98Je3Hpk47Plf5oE6SCvwdifNwgyDF9EP3O0l7fGaJTi8m79sKONwAKY5WT6UFpXI6FQoP_c3FsvGYZnkOVN_MYA9a0B4/s320/UC.png" alt="Urban Trading" className="h-12 mx-auto" />
          <p className="text-gray-500 text-xs leading-relaxed max-w-2xl mx-auto">
            <strong className="text-gray-400">RISK DISCLAIMER:</strong> Trading
            forex and other financial instruments involves substantial risk of
            loss and is not appropriate for all investors. Past performance is
            not indicative of future results. The information on this site is
            for educational purposes only and does not constitute financial
            advice. Never risk more than you can afford to lose. Hypothetical or
            simulated performance results have certain limitations and do not
            represent actual trading. Urban Trading LLC is not a registered
            investment advisor.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-gray-600 text-xs">
            <span>© {new Date().getFullYear()} Urban Trading LLC. All Rights Reserved.</span>
            <a href="#" className="hover:text-gray-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors">
              Disclaimer
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
