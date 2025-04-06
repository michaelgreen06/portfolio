import type { Metadata } from "next"
import { getAllBlogEntries } from "@/lib/api"
import BlogEntryCard from "@/components/features/blog/blog-entry-card"

export const metadata: Metadata = {
  title: "Blog | Michael Green",
  description: "Thoughts, learnings, and updates on my latest projects and explorations.",
}

export default async function BlogPage() {
  const entries = await getAllBlogEntries()

  // Group entries by type
  const entriesByType = entries.reduce(
    (acc, entry) => {
      if (!acc[entry.type]) {
        acc[entry.type] = []
      }
      acc[entry.type].push(entry)
      return acc
    },
    {} as Record<string, typeof entries>,
  )

  return (
    <main className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
      <div className="max-w-4xl mx-auto mb-12 animate-slide-up">
        <h1 className="text-4xl font-bold mb-6 gradient-text">Blog</h1>
        <p className="text-xl text-muted-foreground">
          Thoughts, learnings, and updates on my latest projects and explorations.
        </p>
      </div>

      {/* Learning Posts */}
      {entriesByType.learning && entriesByType.learning.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Learning & Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {entriesByType.learning.map((entry, index) => (
              <BlogEntryCard key={entry.slug} entry={entry} index={index} />
            ))}
          </div>
        </section>
      )}

      {/* Book Notes */}
      {entriesByType.book && entriesByType.book.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Book Notes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {entriesByType.book.map((entry, index) => (
              <BlogEntryCard key={entry.slug} entry={entry} index={index} />
            ))}
          </div>
        </section>
      )}

      {/* Project Updates */}
      {entriesByType.update && entriesByType.update.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Project Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {entriesByType.update.map((entry, index) => (
              <BlogEntryCard key={entry.slug} entry={entry} index={index} />
            ))}
          </div>
        </section>
      )}
    </main>
  )
}

