import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import { getFeaturedProjects } from "@/lib/api"
import { getLatestBlogEntries } from "@/lib/api"
import BlogEntryCard from "@/components/features/blog/blog-entry-card"
import TechIcon from "@/components/features/tech/tech-icon"

export default async function Home() {
  // Fetch data for the page
  const featuredProjects = await getFeaturedProjects(3)
  const latestPosts = await getLatestBlogEntries(3)

  // Tech stack data
  const techStack = {
    frontend: [
      { name: "React", logo: "/images/logos/react.svg" },
      { name: "Next.js", logo: "/images/logos/nextjs.svg" },
      { name: "TypeScript", logo: "/images/logos/typescript.svg" },
      { name: "JavaScript", logo: "/images/logos/javascript.svg" },
      { name: "Vue", logo: "/images/logos/vue.svg" },
      { name: "Tailwind CSS", logo: "/images/logos/tailwind.svg" },
    ],
    backend: [
      { name: "Node.js", logo: "/images/logos/nodejs.svg" },
      { name: "Express", logo: "/images/logos/express.svg" },
      { name: "PostgreSQL", logo: "/images/logos/postgresql.svg" },
      { name: "REST API", logo: "/images/logos/api.svg" },
      { name: "Scaffold ETH", logo: "/images/logos/scaffold-eth.svg" },
      { name: "Python", logo: "/images/logos/python.svg" },
    ],
    tools: [
      { name: "Git", logo: "/images/logos/git.svg" },
      { name: "Postman", logo: "/images/logos/postman.svg" },
      { name: "Docker", logo: "/images/logos/docker.svg" },
      { name: "GraphQL", logo: "/images/logos/graphql.svg" },
      { name: "Windsurf", logo: "/images/logos/windsurf.svg" },
      { name: "NPM", logo: "/images/logos/npm.svg" },
    ],
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section with gradient background */}
      <section className="bg-hero-pattern py-12 md:py-24">
        <div className="container flex flex-col-reverse md:flex-row items-center justify-between gap-8">
          <div className="space-y-6 md:w-3/5 animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Michael Green
              <span className="block text-2xl md:text-3xl font-medium text-muted-foreground mt-2">
                Full Stack Developer
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
          Leveraging an engineering mindset and proven 0-to-1 product experience to build impactful digital solutions. </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="transition-all duration-300 hover:scale-105 hover:shadow-md" asChild>
                <Link href="/projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="md:w-2/5 flex justify-center animate-fade-in">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background shadow-xl hover:shadow-2xl transition-all duration-300">
              <Image
                src="https://res.cloudinary.com/dajtc0uhx/image/upload/f_auto,q_auto/v1743924699/5_xpos6e.jpg"
                alt="Michael Green"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="bg-section-pattern py-16 md:py-24">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-12">
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold tracking-tight mb-4 gradient-text">Featured Projects</h2>
              <p className="text-muted-foreground max-w-2xl">
                A selection of my recent work across climate tech, e-commerce, and web applications.
              </p>
            </div>
            <Button variant="ghost" className="mt-4 md:mt-0 animate-fade-in" asChild>
              <Link href="/projects" className="group">
                View All Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <Card
                key={project.slug}
                className="overflow-hidden flex flex-col h-full hover-card-effect animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.imageUrl || "/placeholder.svg?height=400&width=600"}
                    alt={project.title}
                    fill
                    className="object-cover image-hover-effect"
                  />
                  {project.featured && (
                    <div className="absolute top-2 right-2">
                      <Badge variant="secondary" className="bg-primary text-primary-foreground">
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="transition-colors hover:bg-primary hover:text-primary-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" className="transition-all hover:bg-secondary" asChild>
                    <Link href={`/projects/${project.slug}`}>View Details</Link>
                  </Button>
                  {project.liveUrl && (
                    <Button size="sm" className="transition-all hover:scale-105" asChild>
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        Live Site
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section - Updated with logos */}
      <section className="container py-16 md:py-24">
        <h2 className="text-3xl font-bold tracking-tight mb-12 gradient-text animate-slide-up">Tech Stack</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <h3 className="text-xl font-semibold">Frontend</h3>
            <div className="grid grid-cols-3 gap-6">
              {techStack.frontend.map((tech) => (
                <TechIcon key={tech.name} name={tech.name} logo={tech.logo} />
              ))}
            </div>
          </div>

          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h3 className="text-xl font-semibold">Backend & Data</h3>
            <div className="grid grid-cols-3 gap-6">
              {techStack.backend.map((tech) => (
                <TechIcon key={tech.name} name={tech.name} logo={tech.logo} />
              ))}
            </div>
          </div>

          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <h3 className="text-xl font-semibold">Tools & Other</h3>
            <div className="grid grid-cols-3 gap-6">
              {techStack.tools.map((tech) => (
                <TechIcon key={tech.name} name={tech.name} logo={tech.logo} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="bg-section-pattern py-16 md:py-24">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-12">
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold tracking-tight mb-4 gradient-text">Latest from the Blog</h2>
              <p className="text-muted-foreground max-w-2xl">
                Thoughts, learnings, and updates on my latest projects and explorations.
              </p>
            </div>
            <Button variant="ghost" className="mt-4 md:mt-0 animate-fade-in" asChild>
              <Link href="/blog" className="group">
                View All Posts <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestPosts.map((post, index) => (
              <BlogEntryCard key={post.slug} entry={post} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* About Me Summary */}
      <section className="container py-16 md:py-24">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3 animate-fade-in">
            <div className="relative w-64 h-64 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
              <Image
                src="https://res.cloudinary.com/dajtc0uhx/image/upload/f_auto,q_auto/v1743924699/5_xpos6e.jpg"
                alt="Michael Green"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
          </div>
          <div className="md:w-2/3 space-y-6 animate-slide-up">
            <h2 className="text-3xl font-bold tracking-tight gradient-text">About Me</h2>
            <p className="text-lg text-muted-foreground">
              I&apos;m a Full Stack Developer bringing a unique perspective from successfully founding and scaling a physical product business (0-to-1). My approach combines an engineer&apos;s analytical rigor with deep focus and modern development practices to build effective, user-centered software solutions. I thrive on translating complex challenges into valuable digital products.
            </p>
            <p className="text-lg text-muted-foreground">
              My approach combines technical expertise with a deep understanding of user needs, resulting in
              applications that are both powerful and intuitive to use.
            </p>
            <Button className="transition-all duration-300 hover:scale-105 hover:shadow-md" asChild>
              <Link href="/about" className="group">
                More About Me <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section - Updated to link to contact page */}
      <section id="contact" className="bg-section-pattern py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight mb-6 text-center gradient-text animate-slide-up">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-center animate-fade-in">
          Whether you&apos;re seeking a developer for your next project, have questions about my work, or simply want to connect, I&apos;m always open to interesting conversations and opportunities. </p>

          <div className="flex justify-center animate-fade-in" style={{ animationDelay: "100ms" }}>
            <Button size="lg" className="transition-all duration-300 hover:scale-105 hover:shadow-md" asChild>
              <Link href="/contact">
                Contact Me <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

