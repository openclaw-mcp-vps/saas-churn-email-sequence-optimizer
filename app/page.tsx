export default function Home() {
  const faqs = [
    {
      q: "Which email providers does ChurnShield integrate with?",
      a: "ChurnShield connects with Mailchimp, SendGrid, Postmark, and any provider that supports webhooks, so you can plug it into your existing stack in minutes."
    },
    {
      q: "How does the A/B testing work?",
      a: "You define two or more email sequences, set your audience split, and ChurnShield automatically routes at-risk customers into each variant. Webhook events track opens, clicks, and cancellations so you always know which sequence wins."
    },
    {
      q: "Can I cancel my subscription at any time?",
      a: "Yes. There are no long-term contracts. Cancel from your billing portal whenever you like and you keep access until the end of your billing period."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          For SaaS Founders &amp; Customer Success Teams
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Stop Losing Customers.<br />
          <span className="text-[#58a6ff]">Optimize Every Email</span> That Matters.
        </h1>
        <p className="text-lg text-[#8b949e] mb-10 max-w-xl mx-auto">
          ChurnShield A/B tests email sequences for at-risk customers and tracks which messages prevent cancellations — automatically, with real webhook-based data.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block px-8 py-4 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-lg hover:bg-[#79b8ff] transition-colors"
        >
          Start Reducing Churn — $18/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No contracts. Cancel anytime.</p>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center">
          <p className="text-sm text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$18<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-[#8b949e] mb-8">Everything you need to fight churn</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited A/B test sequences",
              "Webhook-based event tracking",
              "At-risk customer segmentation",
              "Real-time cancellation analytics",
              "Integrates with major email providers",
              "Campaign performance dashboard"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} ChurnShield. All rights reserved.
      </footer>
    </main>
  );
}
