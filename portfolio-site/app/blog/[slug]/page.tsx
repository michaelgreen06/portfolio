import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Tag } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { getBlogEntryBySlug, getAllBlogEntries } from "@/lib/api"

interface BlogEntryPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogEntryPageProps): Promise<Metadata> {
  const entry = await getBlogEntryBySlug(params.slug)

  if (!entry) {
    return {
      title: "Entry Not Found",
      description: "The requested blog entry could not be found.",
    }
  }

  return {
    title: `${entry.title} | Michael Green's Blog`,
    description: entry.excerpt,
  }
}

export async function generateStaticParams() {
  const entries = await getAllBlogEntries()
  return entries.map((entry) => ({
    slug: entry.slug,
  }))
}

export default async function BlogEntryPage({ params }: BlogEntryPageProps) {
  const entry = await getBlogEntryBySlug(params.slug)

  if (!entry) {
    notFound()
  }

  return (
    <main className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 group animate-fade-in"
        >
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" /> Back to Blog
        </Link>

        <article>
          <header className="mb-8 animate-slide-up">
            <h1 className="text-4xl font-bold mb-4 gradient-text">{entry.title}</h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4 text-primary" />
                <time dateTime={entry.date}>
                  {new Date(entry.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>

              <div className="flex items-center">
                <Tag className="mr-2 h-4 w-4 text-primary" />
                <div className="flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="transition-colors hover:bg-primary/10">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-xl text-muted-foreground">{entry.excerpt}</p>
          </header>

          <Separator className="my-8" />

          <div className="animate-fade-in space-y-6" style={{ animationDelay: "200ms" }}>
            {/* In a real app, this would be rendered content */}
            <h2 className="text-2xl font-bold">Introduction</h2>
            <p className="text-lg text-muted-foreground">
              This is where the detailed blog entry content would go. In the future, this would be rendered from content
              files. For now, we&apos;re using placeholder text to demonstrate the layout.
            </p>

            <h2 className="text-2xl font-bold">Main Content</h2>
            <p className="text-lg text-muted-foreground">
              The main content of the blog entry would be here, with proper formatting, code blocks, images, and other
              features.
            </p>

            <h2 className="text-2xl font-bold">Conclusion</h2>
            <p className="text-lg text-muted-foreground">
              Wrapping up the blog entry with some concluding thoughts and takeaways.
            </p>
          </div>
        </article>
      </div>
    </main>
  )
}

