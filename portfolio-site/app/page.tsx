import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import { getFeaturedProjects } from "@/lib/api"
import { getLatestBlogEntries } from "@/lib/api"
import BlogEntryCard from "@/components/features/blog/blog-entry-card"

export default async function Home() {
  // Fetch data for the page
  const featuredProjects = await getFeaturedProjects(3)
  const latestPosts = await getLatestBlogEntries(3)

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section with gradient background */}
      <section className="bg-hero-pattern py-12 md:py-24">
        <div className="container flex flex-col-reverse md:flex-row items-center justify-between gap-8">
          <div className="space-y-6 md:w-3/5 animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Michael Green
              <span className="block text-2xl md:text-3xl font-medium text-muted-foreground mt-2">
                Frontend Developer
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Building thoughtful digital experiences with a focus on climate tech and social impact.
            </p>
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
                src="/placeholder.svg?height=320&width=320"
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

      {/* Tech Stack Section */}
      <section className="container py-16 md:py-24">
        <h2 className="text-3xl font-bold tracking-tight mb-12 gradient-text animate-slide-up">Tech Stack</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <h3 className="text-xl font-semibold">Frontend</h3>
            <div className="grid grid-cols-3 gap-6">
              {["React", "Next.js", "Vue", "TypeScript", "Tailwind CSS", "Framer Motion"].map((tech) => (
                <div key={tech} className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/10 to-indigo-500/10 flex items-center justify-center mb-2 group-hover:from-blue-500/20 group-hover:to-indigo-500/20 transition-all duration-300 hover:scale-110 hover:shadow-md">
                    <span className="text-xl font-bold text-primary">{tech.charAt(0)}</span>
                  </div>
                  <span className="text-sm">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h3 className="text-xl font-semibold">Backend & Data</h3>
            <div className="grid grid-cols-3 gap-6">
              {["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL", "REST API"].map((tech) => (
                <div key={tech} className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/10 to-indigo-500/10 flex items-center justify-center mb-2 group-hover:from-blue-500/20 group-hover:to-indigo-500/20 transition-all duration-300 hover:scale-110 hover:shadow-md">
                    <span className="text-xl font-bold text-primary">{tech.charAt(0)}</span>
                  </div>
                  <span className="text-sm">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <h3 className="text-xl font-semibold">Tools & Other</h3>
            <div className="grid grid-cols-3 gap-6">
              {["Git", "GitHub", "VS Code", "Figma", "Jest", "CI/CD"].map((tech) => (
                <div key={tech} className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/10 to-indigo-500/10 flex items-center justify-center mb-2 group-hover:from-blue-500/20 group-hover:to-indigo-500/20 transition-all duration-300 hover:scale-110 hover:shadow-md">
                    <span className="text-xl font-bold text-primary">{tech.charAt(0)}</span>
                  </div>
                  <span className="text-sm">{tech}</span>
                </div>
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
                src="/placeholder.svg?height=256&width=256"
                alt="Michael Green"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
          </div>
          <div className="md:w-2/3 space-y-6 animate-slide-up">
            <h2 className="text-3xl font-bold tracking-tight gradient-text">About Me</h2>
            <p className="text-lg text-muted-foreground">
              I&apos;m a frontend developer with a passion for building user-centered digital experiences. With a
              background in e-commerce and a focus on climate tech, I bring a unique perspective to every project I work
              on.
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
            Interested in working together? Have a question about one of my projects? I&apos;d love to hear from you.
          </p>

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

