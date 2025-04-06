import Link from "next/link"
import { Github, Mail, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold gradient-text" scroll={true}>
              Michael Green
            </Link>
            <p className="mt-2 text-muted-foreground">
              Building thoughtful digital experiences with a focus on climate tech and social impact.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors" scroll={true}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  scroll={true}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  scroll={true}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  scroll={true}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  scroll={true}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Connect</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://github.com/yourusername"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4 mr-2" /> GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="https://linkedin.com/in/yourusername"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4 mr-2" /> LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:email@gmail.com"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
                >
                  <Mail className="h-4 w-4 mr-2" /> Email
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Michael Green. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

