import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "About | Michael Green",
  description: "Learn more about Michael Green, a Full Stack Developer & Product Builder.",
}

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 gradient-text animate-slide-up">About Me</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-1 animate-fade-in">
            <div className="sticky top-24">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 mb-6">
                <Image
                  src="https://res.cloudinary.com/dajtc0uhx/image/upload/f_auto,q_auto/v1743924699/5_xpos6e.jpg"
                  alt="Michael Green"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
              </div>

              <div className="flex flex-col space-y-4">
                <Button className="w-full" asChild>
                  <Link href="/contact" scroll={true}>
                    Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/projects" scroll={true}>
                    View My Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 space-y-8 animate-slide-up" style={{ animationDelay: "200ms" }}>
            <section>
              <h2 className="text-2xl font-bold mb-4">Full Stack Developer & Product Builder</h2>
              <p className="text-lg text-muted-foreground mb-6">
                I&apos;m a Full Stack Developer driven by the challenge of transforming complex problems into effective digital solutions. My journey began in Chemical Engineering and led me to successfully build and scale a physical product business from the ground up (0-to-1). Now, I apply that same entrepreneurial grit, analytical mindset, and a deliberately cultivated deep focus to building robust, user-centric websites, applications, and automations with modern technologies.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-bold mb-4">From Physical Products to Digital Solutions</h2>
              <p className="text-lg text-muted-foreground mb-4">
              My transition into software development is built on a proven foundation of real-world product creation. I founded Simpacti, the company behind packNpuff, over nine years ago and have been running it ever since. This venture was a masterclass in the entire product lifecycle: identifying a user pain point, engineering a solution, navigating manufacturing, and adapting to market feedback to grow a successful B2C brand on Amazon (4.5 stars with 930+ reviews).
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                This experience taught me the hard-won lessons of entrepreneurship: the importance of customer obsession, the necessity of resilience, and that a great product is not enough. You need a viable business model.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-bold mb-4">My Product-First Engineering Philosophy</h2>
              <p className="text-lg text-muted-foreground mb-4">
                My entrepreneurial journey led me to discover frameworks that crystallized my own experiences into a repeatable process. Discovering Ash Maurya's "Running Lean" was a pivotal moment. It provided a language and a systematic approach—the Lean Canvas, problem interviews, and the Demo-Sell-Build model—for the very principles I had learned intuitively.
              </p>
               <p className="text-lg text-muted-foreground mb-4">
                This is the mindset I bring to software development. I am not just an engineer who writes code; I am a product-focused builder who seeks to de-risk ideas and validate assumptions before a single line of code is written. My goal is to bridge the gap between engineering and business value, ensuring that we are always asking not just "Can we build it?" but "Should we build it?".
              </p>
               <div className="mt-6">
                 <Button variant="outline" className="w-full md:w-auto" asChild>
                   <Link href="/blog/book-rev-running-lean" scroll={true}>
                     My Notes on &quot;Running Lean&quot; <ArrowRight className="ml-2 h-4 w-4" />
                   </Link>
                 </Button>
               </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-bold mb-4">My Engineering & Technical Approach</h2>
              <p className="text-lg text-muted-foreground mb-4">
                My Chemical Engineering background provides a strong foundation in analytical thinking, problem-solving, and understanding systems – principles I now apply to software architecture and development. Recognizing the power of digital tools, I&apos;ve immersed myself in modern web technologies through intensive bootcamps and continuous self-study, rapidly acquiring proficiency in frameworks like React, Next.js, Node.js, and database management with PostgreSQL.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Crucially, my engineering mindset drives me to understand the fundamentals behind the tools I use. This allows me to move beyond surface-level implementation, troubleshoot effectively when challenges arise, and build more resilient and scalable solutions. I actively leverage cutting-edge tools, including AI assistants, to enhance my workflow and build sophisticated features efficiently. My approach is grounded in lean principles: identifying the core problem, building iteratively, measuring results, and focusing relentlessly on delivering value (applying the 80/20 principle).
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-bold mb-4">Focus & Efficiency: My Way of Working</h2>
              <p className="text-lg text-muted-foreground mb-4">
                In a world of constant distraction, I&apos;ve intentionally cultivated the ability to focus deeply and work efficiently. Inspired by concepts from Deep Work, Essentialism, and Getting Things Done, I structure my days for sustained concentration, minimize distractions and dedicate focused blocks of time to complex tasks. This discipline isn&apos;t just a personal habit; it&apos;s a professional asset that enables me to learn quickly, produce high-quality results, solve difficult problems, and reliably deliver results for any team I join.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-bold mb-4">Recent Projects & Contributions</h2>
              <p className="text-lg text-muted-foreground mb-4">
                I&apos;m constantly building and contributing to solidify my skills and explore new technologies:
              </p>
              <ul className="list-disc list-inside text-lg text-muted-foreground space-y-4 mt-4">
                <li>
                  <span className="font-medium">Wetbulb35.com:</span> An independently developed full-stack application providing global wet-bulb temperature data, showcasing API integration, data visualization, and deployment.
                </li>
                <li>
                  <span className="font-medium">Web3 Contributions:</span> Actively contributed to projects like Cookie Jar (Web3 Petty Cash Drawer), Trin Ethereum Client UI, and Eliza OS (AI Agent Framework), gaining experience in collaborative development and diverse codebases.
                </li>
                <li>
                  <span className="font-medium">RegenHub.xyz:</span> Co-founded and helped establish the operational systems for a unique, self-managed coworking space, demonstrating skills in automation and process design.
                </li>
              </ul>
              <div className="mt-6">
                <Button variant="outline" className="w-full md:w-auto" asChild>
                  <Link href="/projects" scroll={true}>
                    View More Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-bold mb-4">What I&apos;m Looking For</h2>
              <p className="text-lg text-muted-foreground mb-4">
                I am actively seeking Full Stack Developer roles where I can leverage my unique blend of technical skills, product development experience, and focused work ethic. I thrive on tackling challenging problems, collaborating with driven teams, and building digital products that provide tangible value.
              </p>
              <div className="mt-6">
                <Button className="w-full md:w-auto" asChild>
                  <Link href="/contact" scroll={true}>
                    Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}

