import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Tag } from "lucide-react"
import { MDXRemote } from "next-mdx-remote/rsc"

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

          {entry.imageUrl && (
            <div
              className="aspect-video relative rounded-lg overflow-hidden mb-12 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: "200ms" }}
            >
              <Image
                src={entry.imageUrl}
                alt={entry.title}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
            </div>
          )}

          <Separator className="my-8" />

          <div className="animate-fade-in prose dark:prose-invert max-w-none" style={{ animationDelay: "200ms" }}>
            <MDXRemote source={entry.content} />
          </div>
        </article>
      </div>
    </main>
  )
}

