import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "About | Michael Green",
  description: "Learn more about Michael Green, a frontend developer focused on climate tech and social impact.",
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
                  src="/placeholder.svg?height=400&width=400"
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
              <h2 className="text-2xl font-bold mb-4">My Story</h2>
              <p className="text-lg text-muted-foreground mb-4">
                I&apos;m a frontend developer with a passion for building user-centered digital experiences. With a
                background in e-commerce and a focus on climate tech, I bring a unique perspective to every project I
                work on.
              </p>
              <p className="text-lg text-muted-foreground">
                My journey into web development began over 5 years ago when I was working in retail and saw firsthand
                how digital transformation was changing the industry. Fascinated by the potential of technology to solve
                real-world problems, I taught myself to code and quickly fell in love with the creative and technical
                aspects of frontend development.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-bold mb-4">My Approach</h2>
              <p className="text-lg text-muted-foreground mb-4">
                I believe that the best digital products are those that seamlessly blend form and function. My approach
                combines technical expertise with a deep understanding of user needs, resulting in applications that are
                both powerful and intuitive to use.
              </p>
              <p className="text-lg text-muted-foreground">When working on a project, I focus on:</p>
              <ul className="list-disc list-inside text-lg text-muted-foreground space-y-2 mt-4">
                <li>Understanding the core problem before jumping to solutions</li>
                <li>Creating accessible and inclusive user experiences</li>
                <li>Writing clean, maintainable code that stands the test of time</li>
                <li>Continuously learning and adapting to new technologies and best practices</li>
              </ul>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-bold mb-4">Professional Experience</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold">Senior Frontend Developer</h3>
                  <p className="text-muted-foreground">Climate Tech Startup • 2021 - Present</p>
                  <p className="mt-2">
                    Leading frontend development for climate monitoring and risk assessment tools. Implemented data
                    visualization dashboards and interactive maps using React, TypeScript, and D3.js.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold">Frontend Developer</h3>
                  <p className="text-muted-foreground">E-commerce Agency • 2018 - 2021</p>
                  <p className="mt-2">
                    Developed custom e-commerce solutions for retail clients. Created responsive interfaces, product
                    configurators, and checkout flows using Vue.js and Nuxt.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold">Web Developer</h3>
                  <p className="text-muted-foreground">Digital Marketing Agency • 2016 - 2018</p>
                  <p className="mt-2">
                    Built marketing websites and landing pages for clients across various industries. Focused on
                    performance optimization and SEO best practices.
                  </p>
                </div>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-bold mb-4">Beyond Coding</h2>
              <p className="text-lg text-muted-foreground mb-4">When I&apos;m not coding, you can find me:</p>
              <ul className="list-disc list-inside text-lg text-muted-foreground space-y-2">
                <li>Hiking in the mountains and exploring nature</li>
                <li>Reading books on design, psychology, and climate science</li>
                <li>Volunteering with local environmental organizations</li>
                <li>Experimenting with sustainable cooking recipes</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}

