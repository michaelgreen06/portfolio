import type { Project, JournalEntry } from "./types"
import { projects } from "./projects"
import { getAllBlogSlugs, getBlogContent } from "./mdx"

// Temporary mock data for journal entries
const mockJournalEntries: JournalEntry[] = [
  {
    slug: "building-climate-tech",
    title: "Building Technology for Climate Action",
    date: "2023-11-10",
    excerpt:
      "Reflections on developing digital tools that help address the climate crisis and promote sustainable practices.",
    content: "# Building Technology for Climate Action\n\nFull content here...",
    type: "learning",
    tags: ["Climate Tech", "Sustainability", "Web Development"],
  },
  {
    slug: "book-review-designing-data-visualizations",
    title: "Book Review: Designing Data Visualizations",
    date: "2023-10-22",
    excerpt:
      "Key insights from this essential guide to creating effective and meaningful data visualizations for the web.",
    content: "# Book Review: Designing Data Visualizations\n\nFull content here...",
    type: "book",
    tags: ["Data Viz", "Book Notes", "Design"],
  },
  {
    slug: "typescript-best-practices",
    title: "TypeScript Best Practices I've Learned the Hard Way",
    date: "2023-09-15",
    excerpt:
      "A collection of TypeScript patterns and practices that have improved my code quality and developer experience.",
    content: "# TypeScript Best Practices\n\nFull content here...",
    type: "learning",
    tags: ["TypeScript", "JavaScript", "Best Practices"],
    projects: ["wetbulb35", "e-commerce-platform"],
  },
]

// Function to get featured projects
export async function getFeaturedProjects(limit = 3): Promise<Project[]> {
  // In a real app, this would fetch from a database or CMS
  // For now, we'll use the projects from projects.ts
  return projects.filter((project) => project.featured).slice(0, limit)
}

// Function to get all projects
export async function getAllProjects(): Promise<Project[]> {
  // In a real app, this would fetch from a database or CMS
  return projects
}

// Function to get a single project by slug
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  // In a real app, this would fetch from a database or CMS
  const project = projects.find((p) => p.slug === slug)
  return project || null
}

// Function to get latest blog entries
export async function getLatestBlogEntries(limit = 3): Promise<JournalEntry[]> {
  try {
    // Get all blog slugs
    const slugs = await getAllBlogSlugs()

    // Get content for each slug
    const entries = await Promise.all(
      slugs.map(async (slug) => {
        const entry = await getBlogContent(slug)
        return entry
      }),
    )

    // Filter out null entries, sort by date, and limit
    return entries
      .filter((entry): entry is JournalEntry => entry !== null)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, limit)
  } catch (error) {
    console.error("Error getting latest blog entries:", error)
    // Fallback to mock data if there's an error
    return mockJournalEntries.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, limit)
  }
}

// For backward compatibility
export const getLatestJournalEntries = getLatestBlogEntries

// Function to get all blog entries
export async function getAllBlogEntries(): Promise<JournalEntry[]> {
  try {
    // Get all blog slugs
    const slugs = await getAllBlogSlugs()

    // Get content for each slug
    const entries = await Promise.all(
      slugs.map(async (slug) => {
        const entry = await getBlogContent(slug)
        return entry
      }),
    )

    // Filter out null entries and sort by date
    return entries
      .filter((entry): entry is JournalEntry => entry !== null)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (error) {
    console.error("Error getting all blog entries:", error)
    // Fallback to mock data if there's an error
    return mockJournalEntries.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }
}

// For backward compatibility
export const getAllJournalEntries = getAllBlogEntries

// Function to get a single blog entry by slug
export async function getBlogEntryBySlug(slug: string): Promise<JournalEntry | null> {
  try {
    return await getBlogContent(slug)
  } catch (error) {
    console.error(`Error getting blog entry for ${slug}:`, error)
    // Fallback to mock data if there's an error
    return mockJournalEntries.find((e) => e.slug === slug) || null
  }
}

// For backward compatibility
export const getJournalEntryBySlug = getBlogEntryBySlug

