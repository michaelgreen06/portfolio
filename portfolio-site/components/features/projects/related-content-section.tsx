import type { Project, JournalEntry } from "@/lib/types"
import ProjectCard from "@/components/features/projects/project-card"
import BlogEntryCard from "@/components/features/blog/blog-entry-card"
import { Separator } from "@/components/ui/separator"

interface RelatedContentSectionProps {
  relatedContent: (Project | JournalEntry)[]
}

function isProject(item: Project | JournalEntry): item is Project {
  return 'technologies' in item
}

function isBlogEntry(item: Project | JournalEntry): item is JournalEntry {
  return 'tags' in item
}

export default function RelatedContentSection({ relatedContent }: RelatedContentSectionProps) {
  if (!relatedContent || relatedContent.length === 0) {
    return null
  }

  return (
    <>
    <Separator className="my-12" />
    <section className="mt-16 animate-fade-in" style={{ animationDelay: "400ms" }}>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 gradient-text">Related Content</h2>
        <p className="text-muted-foreground">
          Explore related projects and insights that complement this work.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedContent.map((item, index) => {
          if (isProject(item)) {
            return <ProjectCard key={`project-${item.slug}`} project={item} index={index} />
          } else if (isBlogEntry(item)) {
            return <BlogEntryCard key={`blog-${item.slug}`} entry={item} index={index} />
          }
          return null
        })}
      </div>
    </section>
    </>
  )
} 