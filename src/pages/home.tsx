import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { env } from "../lib/env";

export function Home() {
  return (
    <main className="space-y-16 pb-24">
      {/* Hero Section */}
      <header className="mx-auto max-w-4xl rounded-2xl border border-[#f1ddc9] bg-[#fff7ec] p-8 text-center shadow-sm sm:p-12">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#d94828]">
          Build Fast. Launch Faster.
        </p>
        <h1 className="text-4xl font-extrabold tracking-tight text-[#26170e] sm:text-5xl">
          Bubble Development Agency <span className="block text-[#d94828]">for Rapid MVPs & Scalable Solutions</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#6f5b4a]">
          We design, develop, and launch custom web apps with Bubble—so you can test ideas, get to market, and grow without the tech friction.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-[#ff6b4a] text-white hover:bg-[#d94828] px-8 py-2 text-base">
            <Link to="#contact">Start Your Project</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-[#e7cdb4] bg-[#fffaf2] text-[#26170e] hover:bg-[#ffe7cf] px-8 py-2 text-base">
            <Link to="#work">See Our Work</Link>
          </Button>
        </div>
      </header>

      {/* Social Proof / Client Logos */}
      <section className="mx-auto max-w-4xl">
        <div className="flex flex-col items-center gap-5">
          <span className="text-xs uppercase tracking-wide text-[#d94828]">Trusted by makers & teams at</span>
          <div className="flex flex-wrap justify-center gap-6 grayscale opacity-70">
            <img src="https://dummyimage.com/100x40/eee/ccc&text=ACME" alt="ACME client logo" className="h-10" />
            <img src="https://dummyimage.com/96x40/eee/ccc&text=FABCO" alt="FABCO client logo" className="h-10" />
            <img src="https://dummyimage.com/110x40/eee/ccc&text=Nova+Labs" alt="Nova Labs client logo" className="h-10" />
            <img src="https://dummyimage.com/90x40/eee/ccc&text=Mint" alt="Mint client logo" className="h-10" />
          </div>
        </div>
      </section>

      {/* Features / Benefits */}
      <section className="mx-auto max-w-5xl px-2">
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="border-[#f1ddc9] bg-[#fffaf2] h-full">
            <CardHeader>
              <CardTitle className="text-lg text-[#26170e]">No-Code, Just Results</CardTitle>
              <CardDescription className="text-[#d94828]">Go from concept to launch in weeks, not months.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-[#6f5b4a]">
              We leverage Bubble’s powerful platform to rapidly develop and iterate, skipping custom code headaches while keeping your workflows tailored to your vision.
            </CardContent>
          </Card>
          <Card className="border-[#f1ddc9] bg-[#fffaf2] h-full">
            <CardHeader>
              <CardTitle className="text-lg text-[#26170e]">Scale with Confidence</CardTitle>
              <CardDescription className="text-[#d94828]">Build foundations for growth.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-[#6f5b4a]">
              We design apps that are fast, robust and extendable—so you can grow with no limits, add features, or migrate when ready.
            </CardContent>
          </Card>
          <Card className="border-[#f1ddc9] bg-[#fffaf2] h-full">
            <CardHeader>
              <CardTitle className="text-lg text-[#26170e]">Full-Service Partnership</CardTitle>
              <CardDescription className="text-[#d94828]">From ideation to optimization.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-[#6f5b4a]">
              We work with you at every step—strategy, design, development, testing, and post-launch optimization. You focus on your vision; we handle the rest.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Offered */}
      <section className="mx-auto max-w-4xl px-2">
        <h2 className="mb-6 text-2xl font-bold text-[#26170e]">What We Offer</h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          <li className="rounded-lg border border-[#facba6] bg-[#fff9f3] px-5 py-4">
            <span className="font-semibold text-[#d94828]">Custom Bubble App Development</span>
            <p className="mt-1 text-sm text-[#6f5b4a]">From simple MVPs to powerful, feature-rich platforms tailored to your business.</p>
          </li>
          <li className="rounded-lg border border-[#facba6] bg-[#fff9f3] px-5 py-4">
            <span className="font-semibold text-[#d94828]">UX/UI Design & Rapid Prototyping</span>
            <p className="mt-1 text-sm text-[#6f5b4a]">We design beautiful, intuitive interfaces that convert users and delight customers.</p>
          </li>
          <li className="rounded-lg border border-[#facba6] bg-[#fff9f3] px-5 py-4">
            <span className="font-semibold text-[#d94828]">Bubble Integrations & Automations</span>
            <p className="mt-1 text-sm text-[#6f5b4a]">Connect APIs, plug in third-party tools, and automate processes—no code required.</p>
          </li>
          <li className="rounded-lg border border-[#facba6] bg-[#fff9f3] px-5 py-4">
            <span className="font-semibold text-[#d94828]">Launch & Growth Support</span>
            <p className="mt-1 text-sm text-[#6f5b4a]">From go-live to scaling, we provide training, docs, and on-call support for your journey.</p>
          </li>
        </ul>
      </section>

      {/* Process Overview */}
      <section className="mx-auto max-w-4xl px-2">
        <h2 className="mb-6 text-2xl font-bold text-[#26170e]">How It Works</h2>
        <ol className="relative border-l-2 border-[#ffe3cc] pl-6">
          <li className="mb-8 ml-2">
            <div className="absolute -left-3.5 top-0 flex h-7 w-7 items-center justify-center rounded-full bg-[#ff6b4a] text-white font-bold text-sm">
              1
            </div>
            <div className="ml-6">
              <h3 className="font-semibold text-[#26170e]">Discovery & Scoping</h3>
              <p className="text-sm text-[#6f5b4a]">We learn your goals, workflow, and vision to map out the plan.</p>
            </div>
          </li>
          <li className="mb-8 ml-2">
            <div className="absolute -left-3.5 top-16 flex h-7 w-7 items-center justify-center rounded-full bg-[#ff6b4a] text-white font-bold text-sm">
              2
            </div>
            <div className="ml-6">
              <h3 className="font-semibold text-[#26170e]">Design & Build</h3>
              <p className="text-sm text-[#6f5b4a]">Rapid UI prototyping and Bubble app development with iterative feedback.</p>
            </div>
          </li>
          <li className="ml-2">
            <div className="absolute -left-3.5 top-32 flex h-7 w-7 items-center justify-center rounded-full bg-[#ff6b4a] text-white font-bold text-sm">
              3
            </div>
            <div className="ml-6">
              <h3 className="font-semibold text-[#26170e]">Launch & Grow</h3>
              <p className="text-sm text-[#6f5b4a]">Deploy, train, and optimize—plus ongoing upgrades as you scale.</p>
            </div>
          </li>
        </ol>
      </section>

      {/* Sample Projects / Case Studies */}
      <section id="work" className="mx-auto max-w-5xl px-2 py-8">
        <h2 className="mb-6 text-2xl font-bold text-[#26170e]">Featured Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <Card className="border-[#f1ddc9] bg-white hover:shadow-md">
            <CardHeader>
              <img
                src="https://dummyimage.com/400x180/ddd/eee&text=Health+Marketplace"
                alt="Demo project"
                className="mb-3 h-28 w-full rounded object-cover"
              />
              <CardTitle className="text-lg">Health Marketplace MVP</CardTitle>
              <CardDescription>Launched in 3 weeks</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-[#6f5b4a]">
              A two-sided marketplace for health pros & clients, launched fast for feedback and iteration.
            </CardContent>
          </Card>
          <Card className="border-[#f1ddc9] bg-white hover:shadow-md">
            <CardHeader>
              <img
                src="https://dummyimage.com/400x180/eee/ccc&text=SaaS+Analytics+Tool"
                alt="Demo project"
                className="mb-3 h-28 w-full rounded object-cover"
              />
              <CardTitle className="text-lg">SaaS Analytics Dashboard</CardTitle>
              <CardDescription>No-code, full dashboard suite</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-[#6f5b4a]">
              Interactive analytics, custom KPIs, and multi-user roles—all powered by Bubble logic.
            </CardContent>
          </Card>
          <Card className="border-[#f1ddc9] bg-white hover:shadow-md">
            <CardHeader>
              <img
                src="https://dummyimage.com/400x180/ccc/999&text=Creator+Community"
                alt="Demo project"
                className="mb-3 h-28 w-full rounded object-cover"
              />
              <CardTitle className="text-lg">Creator Community Platform</CardTitle>
              <CardDescription>Scalable + member profiles</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-[#6f5b4a]">
              A robust social platform with advanced search, feeds, and payment integration.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About / Team Brief */}
      <section className="mx-auto max-w-4xl px-2">
        <h2 className="mb-6 text-2xl font-bold text-[#26170e]">Meet Your Team</h2>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
          <div className="flex flex-col items-center">
            <img
              src="https://dummyimage.com/80x80/ee7755/fff&text=AB"
              alt="Founder avatar"
              className="mb-2 h-20 w-20 rounded-full border-4 border-[#ffe3cc] object-cover"
            />
            <span className="font-semibold text-[#26170e]">Alex B.</span>
            <span className="text-xs text-[#d94828]">Product & Bubble Dev</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://dummyimage.com/80x80/aaee88/fff&text=MS"
              alt="Lead Designer avatar"
              className="mb-2 h-20 w-20 rounded-full border-4 border-[#ffe3cc] object-cover"
            />
            <span className="font-semibold text-[#26170e]">Morgan S.</span>
            <span className="text-xs text-[#d94828]">UX/UI Design</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://dummyimage.com/80x80/87bbfa/fff&text=LK"
              alt="Bubble engineer avatar"
              className="mb-2 h-20 w-20 rounded-full border-4 border-[#ffe3cc] object-cover"
            />
            <span className="font-semibold text-[#26170e]">Lee K.</span>
            <span className="text-xs text-[#d94828]">Integrations Engineer</span>
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-[#6f5b4a] max-w-2xl mx-auto">
          We’re a nimble, distributed agency with years of Bubble & product experience. Expect clear communication, honest timelines, and pride in every build.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="mx-auto max-w-3xl px-2">
        <h2 className="mb-6 text-2xl font-bold text-[#26170e]">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="rounded-lg border border-[#ffe3cc] bg-[#fffdfa] p-4" open>
            <summary className="font-semibold text-[#d94828] cursor-pointer outline-none">How quickly can we launch my app?</summary>
            <div className="ml-4 mt-2 text-sm text-[#6f5b4a]">
              Most simple MVPs are live within 2–4 weeks. Complexity and feedback cycles may extend timelines, but every project is mapped to transparent milestones.
            </div>
          </details>
          <details className="rounded-lg border border-[#ffe3cc] bg-[#fffdfa] p-4">
            <summary className="font-semibold text-[#d94828] cursor-pointer outline-none">Can I move off Bubble later?</summary>
            <div className="ml-4 mt-2 text-sm text-[#6f5b4a]">
              Absolutely. We architect with data exports and handoffs in mind, so migrating features when you’re ready is straightforward—not a roadblock.
            </div>
          </details>
          <details className="rounded-lg border border-[#ffe3cc] bg-[#fffdfa] p-4">
            <summary className="font-semibold text-[#d94828] cursor-pointer outline-none">Will you help with updates or new features?</summary>
            <div className="ml-4 mt-2 text-sm text-[#6f5b4a]">
              Yes! Ongoing support packages are available, from bugfixes and upgrades to new features as your product grows.
            </div>
          </details>
          <details className="rounded-lg border border-[#ffe3cc] bg-[#fffdfa] p-4">
            <summary className="font-semibold text-[#d94828] cursor-pointer outline-none">What does it cost?</summary>
            <div className="ml-4 mt-2 text-sm text-[#6f5b4a]">
              Every build is unique, but our transparent pricing model starts at flat project rates—no surprise fees.
            </div>
          </details>
        </div>
      </section>

      {/* Closing CTA */}
      <section id="contact" className="mx-auto max-w-2xl rounded-2xl border border-[#f1ddc9] bg-[#fff7ec] p-8 text-center shadow-sm">
        <h2 className="text-2xl font-extrabold text-[#26170e]">Bring Your Idea to Life</h2>
        <p className="mt-2 text-sm text-[#6f5b4a]">
          Ready to launch or want a free consult? Let’s talk about your next big thing.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-[#ff6b4a] text-white hover:bg-[#d94828] px-8 py-2 text-base">
            <Link to="mailto:hello@bubbleagency.dev">Request a Free Consultation</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-[#e7cdb4] bg-[#fffaf2] text-[#26170e] hover:bg-[#ffe7cf] px-8 py-2 text-base">
            <Link to="#hero">Back to Top</Link>
          </Button>
        </div>
        <p className="mt-4 text-xs text-[#6f5b4a]">{env.appName} &mdash; Your Bubble product partner</p>
      </section>
    </main>
  );
}