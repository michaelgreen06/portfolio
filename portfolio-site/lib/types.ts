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
}

// Journal entry type definition
export interface BlogEntry {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  type: "update" | "book" | "learning"
  tags: string[]
  projects?: string[]
}

