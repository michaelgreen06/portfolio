import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Github, ExternalLink, Calendar } from "lucide-react"
import { MDXRemote } from "next-mdx-remote/rsc"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

import { getProjectBySlug } from "@/lib/api"
import { getAllProjectSlugs } from "@/lib/mdx"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug)

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    }
  }

  return {
    title: `${project.title} | Michael Green`,
    description: project.description,
  }
}

export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/projects"
          className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 group animate-fade-in"
        >
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" /> Back to Projects
        </Link>

        <div className="mb-8 animate-slide-up">
          <h1 className="text-4xl font-bold mb-4 gradient-text">{project.title}</h1>
          <p className="text-xl text-muted-foreground mb-6">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
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

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4 text-primary" />
              <time dateTime={project.date}>
                {new Date(project.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                })}
              </time>
            </div>

            <div className="flex gap-4">
              {project.githubUrl && (
                <Button variant="outline" size="sm" className="transition-all hover:bg-secondary" asChild>
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="group">
                    <Github className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" /> View on GitHub
                  </Link>
                </Button>
              )}

              {project.liveUrl && (
                <Button variant="outline" size="sm" className="transition-all hover:bg-secondary" asChild>
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="group">
                    <ExternalLink className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" /> Visit Live Site
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>

        <div
          className="aspect-video relative rounded-lg overflow-hidden mb-12 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in"
          style={{ animationDelay: "200ms" }}
        >
          <Image
            src={project.imageUrl || "/placeholder.svg?height=600&width=1200"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            priority
          />
        </div>

        <Separator className="my-8" />

        <div className="prose dark:prose-invert max-w-none animate-fade-in" style={{ animationDelay: "300ms" }}>
          <MDXRemote source={project.content} />
        </div>
      </div>
    </main>
  )
}

