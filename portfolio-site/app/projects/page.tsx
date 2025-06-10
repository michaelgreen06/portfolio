import type { Metadata } from "next"

import { getAllProjects } from "@/lib/api"
import ProjectCard from "@/components/features/projects/project-card"

export const metadata: Metadata = {
  title: "Projects | Michael Green",
  description: "Explore my software development and physical product design projects.",
}

export default async function ProjectsPage() {
  // Get projects from MDX files
  const projects = await getAllProjects()
  
  // Simple categorization with custom sorting
  const softwareProjects = projects.filter((p) => p.type === "software")
  
  // Sort physical projects by featured status first, then by date
  const physicalProjects = projects
    .filter((p) => p.type === "physical")
    .sort((a, b) => {
      // Featured projects first
      if (a.featured && !b.featured) return -1
      if (!a.featured && b.featured) return 1
      // Then by date (newest first)
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })

  return (
    <main className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
      <div className="max-w-4xl mx-auto mb-12 animate-slide-up">
        <h1 className="text-4xl font-bold mb-6 gradient-text">My Projects</h1>
        <p className="text-xl text-muted-foreground">
          A collection of my work in software development and product design. Each project represents a unique challenge
          and solution in its respective domain.
        </p>
      </div>

      {/* Software Projects Section */}
      <section className="mb-20">
        <div className="max-w-4xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: "100ms" }}>
          <h2 className="text-3xl font-bold mb-4 gradient-text">Software Development</h2>
          <p className="text-muted-foreground">
            Web applications, data visualizations, and digital tools I've built using modern technologies.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {softwareProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>

      {/* Physical Products Section */}
      <section className="border-t pt-16">
        <div className="max-w-4xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: "200ms" }}>
          <h2 className="text-3xl font-bold mb-4 gradient-text">Physical Products</h2>
          <p className="text-muted-foreground">
            Projects that showcase my product design experience and entrepreneurial background.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {physicalProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>
    </main>
  )
}

