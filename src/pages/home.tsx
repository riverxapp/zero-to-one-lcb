import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { env } from "../lib/env";

export function Home() {
  return (
    <main className="space-y-20 pb-24 bg-gradient-to-br from-[#f7f6f9] via-[#faf9f7] to-[#f6f3fa] min-h-screen">
      {/* Hero Section */}
      <header
        id="hero"
        className="mx-auto max-w-4xl rounded-2xl border border-border bg-white p-10 text-center shadow-lg sm:p-16"
      >
        <div className="mb-5 flex flex-col items-center gap-2">
          <span className="rounded bg-muted-foreground/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-brand-600">
            Build smart. Ship fast.
          </span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          <span className="font-display">Zero To</span>{" "}
          <span className="inline-block align-baseline text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b4a] via-[#d94828] to-[#ff6b4a]">
            –
          </span>{" "}
          <span className="font-semibold">Modern Editor for Your Ideas</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Bring a streamlined, editor-inspired UX to your SaaS, project, or startup. <br className="hidden sm:inline" />
          Create, structure, and iterate on your products visually—no code bottlenecks.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="px-8 py-2 text-base">
            <Link to="/projects">Start Your Project</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-muted bg-background text-foreground px-8 py-2 text-base">
            <Link to="#work">See Featured Work</Link>
          </Button>
        </div>
        <div className="mt-7 flex justify-center">
          <Button asChild variant="secondary" size="lg" className="px-8 py-2 bg-accent text-foreground hover:bg-[#ececec]">
            <Link to="#contact">Talk to a Product Specialist</Link>
          </Button>
        </div>
      </header>

      {/* Social Proof / Client Logos */}
      <section className="mx-auto max-w-4xl">
        <div className="flex flex-col items-center gap-4">
          <span className="text-xs uppercase tracking-wide text-muted-foreground/80">Trusted by makers & teams at</span>
          <div className="flex flex-wrap justify-center gap-6 grayscale opacity-70">
            <img src="https://dummyimage.com/100x40/eee/ccc&text=ACME" alt="ACME client logo" className="h-10" />
            <img src="https://dummyimage.com/96x40/eee/ccc&text=FABCO" alt="FABCO client logo" className="h-10" />
            <img src="https://dummyimage.com/110x40/eee/ccc&text=Nova+Labs" alt="Nova Labs client logo" className="h-10" />
            <img src="https://dummyimage.com/90x40/eee/ccc&text=Mint" alt="Mint client logo" className="h-10" />
          </div>
        </div>
      </section>

      {/* Features: Editor-like */}
      <section className="mx-auto max-w-5xl px-4">
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="border-muted bg-card h-full shadow-xs">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg text-foreground">
                <span className="inline-block rounded bg-primary/10 px-2 py-0.5 text-base font-bold text-[#d94828]">1</span>
                Editor-First Design
              </CardTitle>
              <CardDescription className="text-accent-foreground">
                Familiar, focused, and distraction-free workspace
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Clean layouts, inline tool panels, and modular cards—giving every user the power of a professional editor regardless of technical skill.
            </CardContent>
          </Card>
          <Card className="border-muted bg-card h-full shadow-xs">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg text-foreground">
                <span className="inline-block rounded bg-primary/10 px-2 py-0.5 text-base font-bold text-[#d94828]">2</span>
                Real-Time Feedback
              </CardTitle>
              <CardDescription className="text-accent-foreground">
                Structured actions and live context
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Every action is explicit: create, edit, or preview instantly, with clear callouts for incomplete steps.
            </CardContent>
          </Card>
          <Card className="border-muted bg-card h-full shadow-xs">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg text-foreground">
                <span className="inline-block rounded bg-primary/10 px-2 py-0.5 text-base font-bold text-[#d94828]">3</span>
                Modular Flow
              </CardTitle>
              <CardDescription className="text-accent-foreground">
                Iterate with blocks, sections, states
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              The page is your canvas. Compose projects, content, or workflow processes using cards, blocks, or panels—mix and match for your business needs.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-4xl px-4">
        <h2 className="mb-6 text-2xl font-bold text-foreground">What We Offer</h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          <li className="rounded-lg border border-accent bg-background px-5 py-4 shadow-xs">
            <span className="font-semibold text-[#d94828]">Custom Editor-Like Apps</span>
            <p className="mt-1 text-sm text-muted-foreground">
              From MVP launchpads to full-featured content and workflow editors for every use case.
            </p>
          </li>
          <li className="rounded-lg border border-accent bg-background px-5 py-4 shadow-xs">
            <span className="font-semibold text-[#d94828]">UI/UX by Product Designers</span>
            <p className="mt-1 text-sm text-muted-foreground">
              Modern, conversion-focused interfaces with accessible, fluid interaction patterns.
            </p>
          </li>
          <li className="rounded-lg border border-accent bg-background px-5 py-4 shadow-xs">
            <span className="font-semibold text-[#d94828]">Integrations & API Bridges</span>
            <p className="mt-1 text-sm text-muted-foreground">
              Seamless backend-agnostic links, ready for SaaS, docs, or niche workflow automations.
            </p>
          </li>
          <li className="rounded-lg border border-accent bg-background px-5 py-4 shadow-xs">
            <span className="font-semibold text-[#d94828]">Growth Onboarding & Docs</span>
            <p className="mt-1 text-sm text-muted-foreground">
              Get written docs and onboarding guides—so your team collaborates smoothly from day one.
            </p>
          </li>
        </ul>
      </section>

      {/* Process as Editor Steps */}
      <section className="mx-auto max-w-4xl px-4">
        <h2 className="mb-6 text-2xl font-bold text-foreground">From Idea to Product: The Flow</h2>
        <ol className="relative border-l-2 border-dashed border-accent pl-6">
          <li className="mb-10 ml-2 flex items-start">
            <div className="absolute -left-4 top-0 flex h-7 w-7 items-center justify-center rounded-full bg-[#ff6b4a] text-white font-bold shadow">
              1
            </div>
            <div className="ml-7">
              <h3 className="font-semibold text-foreground">Workshop & Scope</h3>
              <p className="text-sm text-muted-foreground">
                Requirements intake with live workshop boards—no missed details or fuzzy goals.
              </p>
            </div>
          </li>
          <li className="mb-10 ml-2 flex items-start">
            <div className="absolute -left-4 top-20 flex h-7 w-7 items-center justify-center rounded-full bg-[#ff6b4a] text-white font-bold shadow">
              2
            </div>
            <div className="ml-7">
              <h3 className="font-semibold text-foreground">Design & Build</h3>
              <p className="text-sm text-muted-foreground">
                Wireframes, modular cards, instant previews—build interacts like your editor.
              </p>
            </div>
          </li>
          <li className="ml-2 flex items-start">
            <div className="absolute -left-4 top-40 flex h-7 w-7 items-center justify-center rounded-full bg-[#ff6b4a] text-white font-bold shadow">
              3
            </div>
            <div className="ml-7">
              <h3 className="font-semibold text-foreground">Launch & Iterate</h3>
              <p className="text-sm text-muted-foreground">
                Push live, onboard users with guides, and iterate with real feedback—just like in your favorite workspace app.
              </p>
            </div>
          </li>
        </ol>
      </section>

      {/* Featured Projects */}
      <section id="work" className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="mb-6 text-2xl font-bold text-foreground">Featured Projects</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          <Card className="border-muted bg-white hover:shadow-md transition-shadow h-full flex flex-col">
            <CardHeader>
              <img
                src="https://dummyimage.com/400x180/ddd/eee&text=Health+Marketplace"
                alt="Demo project"
                className="mb-3 h-28 w-full rounded object-cover border"
              />
              <CardTitle className="text-lg">Health Marketplace MVP</CardTitle>
              <CardDescription>Launched in 3 weeks</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground flex-grow">
              Custom admin/editor interface for providers, with instant listings and secure comms.
            </CardContent>
          </Card>
          <Card className="border-muted bg-white hover:shadow-md transition-shadow h-full flex flex-col">
            <CardHeader>
              <img
                src="https://dummyimage.com/400x180/eee/ccc&text=SaaS+Analytics+Tool"
                alt="Demo project"
                className="mb-3 h-28 w-full rounded object-cover border"
              />
              <CardTitle className="text-lg">SaaS Analytics Dashboard</CardTitle>
              <CardDescription>Dashboard editor, charts, permissions</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground flex-grow">
              Built modern analytics flows with role-based editing and live preview, in Bubble.
            </CardContent>
          </Card>
          <Card className="border-muted bg-white hover:shadow-md transition-shadow h-full flex flex-col">
            <CardHeader>
              <img
                src="https://dummyimage.com/400x180/ccc/999&text=Creator+Community"
                alt="Demo project"
                className="mb-3 h-28 w-full rounded object-cover border"
              />
              <CardTitle className="text-lg">Creator Community Platform</CardTitle>
              <CardDescription>Custom block editor, profiles</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground flex-grow">
              Modular content builder for creators; drag-and-drop cards and integrated Stripe checkout.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-4xl px-4">
        <h2 className="mb-6 text-2xl font-bold text-foreground">Meet Your Team</h2>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-10">
          <div className="flex flex-col items-center">
            <img
              src="https://dummyimage.com/80x80/ee7755/fff&text=AB"
              alt="Founder avatar"
              className="mb-3 h-20 w-20 rounded-full border-4 border-accent/40 object-cover shadow-xs"
            />
            <span className="font-semibold text-foreground">Alex B.</span>
            <span className="text-xs text-muted-foreground">Product & Bubble Dev</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://dummyimage.com/80x80/aaee88/fff&text=MS"
              alt="Lead Designer avatar"
              className="mb-3 h-20 w-20 rounded-full border-4 border-accent/40 object-cover shadow-xs"
            />
            <span className="font-semibold text-foreground">Morgan S.</span>
            <span className="text-xs text-muted-foreground">UX/UI Design</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://dummyimage.com/80x80/87bbfa/fff&text=LK"
              alt="Bubble engineer avatar"
              className="mb-3 h-20 w-20 rounded-full border-4 border-accent/40 object-cover shadow-xs"
            />
            <span className="font-semibold text-foreground">Lee K.</span>
            <span className="text-xs text-muted-foreground">Integrations Engineer</span>
          </div>
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground max-w-2xl mx-auto">
          We’re a nimble agency with editor and SaaS background. Expect honest timelines, clear docs, and daily progress—your product, not ours.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="mx-auto max-w-3xl px-4">
        <h2 className="mb-6 text-2xl font-bold text-foreground">FAQs</h2>
        <div className="space-y-4">
          <details className="rounded-lg border border-accent bg-background p-4 shadow-xs open:shadow-md">
            <summary className="font-semibold text-[#d94828] cursor-pointer outline-none">
              How quickly can we launch my app?
            </summary>
            <div className="ml-4 mt-2 text-sm text-muted-foreground">
              Most simple MVPs are live within 2–4 weeks. Project complexity and feedback cycles may extend timelines, but you get weekly milestones you can comment on—right in the workspace.
            </div>
          </details>
          <details className="rounded-lg border border-accent bg-background p-4 shadow-xs">
            <summary className="font-semibold text-[#d94828] cursor-pointer outline-none">
              Can I move off Bubble later?
            </summary>
            <div className="ml-4 mt-2 text-sm text-muted-foreground">
              Yes. All data and designs are architected for portability and handoff—like a good doc editor.
            </div>
          </details>
          <details className="rounded-lg border border-accent bg-background p-4 shadow-xs">
            <summary className="font-semibold text-[#d94828] cursor-pointer outline-none">
              Will you help with updates or new features?
            </summary>
            <div className="ml-4 mt-2 text-sm text-muted-foreground">
              Absolutely! We offer ongoing support plans for updates, feature drops, and usage analytics—integrated into your custom editor dashboard.
            </div>
          </details>
          <details className="rounded-lg border border-accent bg-background p-4 shadow-xs">
            <summary className="font-semibold text-[#d94828] cursor-pointer outline-none">
              What does it cost?
            </summary>
            <div className="ml-4 mt-2 text-sm text-muted-foreground">
              Every build is unique, but you get clear pricing, demoable steps, and no surprises. Our editor-inspired process means you always see what’s next.
            </div>
          </details>
        </div>
      </section>

      {/* Closing CTA */}
      <section
        id="contact"
        className="mx-auto max-w-2xl rounded-2xl border border-border bg-white p-10 text-center shadow-lg"
      >
        <h2 className="text-2xl font-extrabold text-foreground">Let’s Build Your Editor</h2>
        <p className="mt-2 text-base text-muted-foreground">
          Ready to move fast with a professional product team? Let’s talk and bring your vision to life.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="px-8 py-2 text-base">
            <Link to="/projects">Start Your Project</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-muted bg-background text-foreground px-8 py-2 text-base">
            <Link to="mailto:hello@zeroto.dev">Request a Free Consultation</Link>
          </Button>
        </div>
        <p className="mt-5 text-xs text-muted-foreground">
          {env.appName} &mdash; Modern product editors, fast launches, world-class results
        </p>
      </section>
    </main>
  );
}