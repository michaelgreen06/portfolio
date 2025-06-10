// Project type definition
export interface Project {
  slug: string
  title: string
  description: string
  technologies: string[]
  imageUrl: string
  githubUrl?: string
  liveUrl?: string
  featured: boolean
  content: string
  date: string
  type: "software" | "physical"
  relatedContent?: RelatedContentItem[]
}

// Journal entry type definition
export interface JournalEntry {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  type: "update" | "book" | "learning"
  tags: string[]
  projects?: string[]
  imageUrl?: string
  relatedContent?: RelatedContentItem[]
}

// Related content type definition
export interface RelatedContentItem {
  type: "project" | "blog"
  slug: string
}

// For backward compatibility
export type BlogEntry = JournalEntry

