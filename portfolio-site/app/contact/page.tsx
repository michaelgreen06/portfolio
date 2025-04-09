import type { Metadata } from "next"
import Link from "next/link"
import { Github, Mail, Linkedin, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Contact | Michael Green",
  description: "Get in touch with Michael Green for project inquiries, collaborations, or just to say hello.",
}

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 gradient-text animate-slide-up">Contact Me</h1>
        <p className="text-xl text-muted-foreground mb-12 animate-fade-in">
          Interested in working together? Have a question about one of my projects? I&apos;d love to hear from you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <h2 className="text-2xl font-bold">Send a Message</h2>
            <form className="space-y-4 bg-white/50 dark:bg-gray-900/50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all duration-200 focus:shadow-md"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all duration-200 focus:shadow-md"
                    placeholder="Your email"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all duration-200 focus:shadow-md"
                    placeholder="What's this about?"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="min-h-32 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all duration-200 focus:shadow-md"
                    placeholder="Your message"
                    required
                  />
                </div>
              </div>
              <Button type="submit" className="w-full transition-all duration-300 hover:scale-105 hover:shadow-md">
                Send Message
              </Button>
            </form>
          </div>

          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h2 className="text-2xl font-bold">Contact Information</h2>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="mr-2 h-5 w-5 text-primary" /> Email
                </CardTitle>
                <CardDescription>For general inquiries and project discussions</CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href="mailto:mgdevstuff@gmail.com"
                  className="text-primary hover:underline hover:text-primary/80 transition-colors"
                >
                  mgdevstuff@gmail.com
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Github className="mr-2 h-5 w-5 text-primary" /> GitHub
                </CardTitle>
                <CardDescription>Check out my code and open source contributions</CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href="https://github.com/michaelgreen06"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline hover:text-primary/80 transition-colors"
                >
                  github.com/michaelgreen06
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Linkedin className="mr-2 h-5 w-5 text-primary" /> LinkedIn
                </CardTitle>
                <CardDescription>Connect with me professionally</CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href="https://linkedin.com/in/michaelgreen2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline hover:text-primary/80 transition-colors"
                >
                  linkedin.com/in/michaelgreen2
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator className="my-16" />

        <div className="text-center animate-fade-in" style={{ animationDelay: "300ms" }}>
          <h2 className="text-2xl font-bold mb-4">Let&apos;s Work Together</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you&apos;re looking for a developer for your next project, have questions about my work, or just
            want to connect, I&apos;m always open to new opportunities and conversations.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href="/projects">View My Projects</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/about">Learn More About Me</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

