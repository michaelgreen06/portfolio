import type { Metadata } from "next"
import Link from "next/link"
import { Github, Mail, Linkedin } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

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
          Interested in collaborating or have a question about one of my projects? Don&apos;t hesitate to reach out through any of the channels below.
        </p>

        <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
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
    </main>
  )
}

