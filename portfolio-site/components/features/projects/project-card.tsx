import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Github, ExternalLink } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

import type { Project } from "@/lib/types"

interface ProjectCardProps {
  project: Project
  index?: number
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  // Calculate animation delay based on index
  const animationDelay = `animate-delay-${(index % 5) * 100}`

  return (
    <Card
      className="overflow-hidden flex flex-col h-full hover-card-effect animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="aspect-video relative overflow-hidden cursor-pointer">
          <Image
            src={project.imageUrl || "/placeholder.svg?height=400&width=600"}
            alt={project.title}
            fill
            className="object-cover image-hover-effect transition-transform duration-300 hover:scale-105"
          />
          {project.featured && (
            <div className="absolute top-2 right-2">
              <Badge variant="secondary" className="bg-primary text-primary-foreground">
                Featured
              </Badge>
            </div>
          )}
        </div>
      </Link>
      <CardHeader>
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2">
        <Button variant="default" size="sm" className="transition-all hover:scale-105" asChild>
          <Link href={`/projects/${project.slug}`}>
            View Details <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
        {project.githubUrl && (
          <Button variant="outline" size="sm" className="transition-all hover:bg-secondary" asChild>
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </Link>
          </Button>
        )}
        {project.liveUrl && (
          <Button variant="outline" size="sm" className="transition-all hover:bg-secondary" asChild>
            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Live Site
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

