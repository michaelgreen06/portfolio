import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

import type { JournalEntry } from "@/lib/types"

export interface JournalEntryCardProps {
  entry: JournalEntry
  index?: number
  // Remove key from props as it's handled by React internally
}

export default function BlogEntryCard({ entry, index = 0 }: JournalEntryCardProps) {
  // Calculate animation delay based on index
  const animationDelay = `animate-delay-${(index % 5) * 100}`

  return (
    <Card
      className="flex flex-col h-full hover-card-effect animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          {entry.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="outline" className="transition-colors hover:bg-primary/10">
              {tag}
            </Badge>
          ))}
          {entry.tags.length > 2 && <Badge variant="outline">+{entry.tags.length - 2}</Badge>}
        </div>
        <CardTitle>{entry.title}</CardTitle>
        <CardDescription>
          <time dateTime={entry.date}>
            {new Date(entry.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{entry.excerpt}</p>
      </CardContent>
      <CardFooter>
        <Link
          href={`/blog/${entry.slug}`}
          className="text-primary hover:text-primary/80 inline-flex items-center text-sm font-medium ml-auto group"
        >
          Read More <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </CardFooter>
    </Card>
  )
}

