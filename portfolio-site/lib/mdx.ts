import fs from "fs"
import path from "path"
import matter from "gray-matter"

import type { Project, JournalEntry } from "./types"

// Function to read MDX files from the content directory
export async function getProjectContent(slug: string): Promise<Project | null> {
  try {
    const filePath = path.join(process.cwd(), "content", "projects", `${slug}.mdx`)
    const fileContent = fs.readFileSync(filePath, "utf8")

    const { data, content } = matter(fileContent)

    return {
      slug,
      title: data.title,
      description: data.description,
      technologies: data.technologies,
      imageUrl: data.imageUrl,
      githubUrl: data.githubUrl,
      liveUrl: data.liveUrl,
      featured: data.featured,
      content,
      date: data.date,
      type: data.type,
    }
  } catch (error) {
    console.error(`Error reading project content for ${slug}:`, error)
    return null
  }
}

export async function getBlogContent(slug: string): Promise<JournalEntry | null> {
  // Try the blog directory first, then fall back to journal for backward compatibility
  try {
    // Try blog directory first
    const blogFilePath = path.join(process.cwd(), "content", "blog", `${slug}.mdx`)
    if (fs.existsSync(blogFilePath)) {
      const fileContent = fs.readFileSync(blogFilePath, "utf8")
      const { data, content } = matter(fileContent)

      return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        content,
        type: data.type,
        tags: data.tags || [],
        projects: data.projects,
      }
    }

    // If not found in blog, try journal directory
    const journalFilePath = path.join(process.cwd(), "content", "journal", `${slug}.mdx`)
    if (fs.existsSync(journalFilePath)) {
      const fileContent = fs.readFileSync(journalFilePath, "utf8")
      const { data, content } = matter(fileContent)

      return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        content,
        type: data.type,
        tags: data.tags || [],
        projects: data.projects,
      }
    }

    console.error(`File not found for slug ${slug} in either blog or journal directories`)
    return null
  } catch (error) {
    console.error(`Error reading blog content for ${slug}:`, error)
    return null
  }
}

// For backward compatibility
export const getJournalContent = getBlogContent

// Function to get all project slugs
export async function getAllProjectSlugs(): Promise<string[]> {
  try {
    const projectsDir = path.join(process.cwd(), "content", "projects")
    const files = fs.readdirSync(projectsDir)
    return files.filter((file: string) => file.endsWith(".mdx")).map((file: string) => file.replace(/\.mdx$/, ""))
  } catch (error) {
    console.error("Error reading project slugs:", error)
    return []
  }
}

// Function to get all blog slugs
export async function getAllBlogSlugs(): Promise<string[]> {
  try {
    const blogSlugs: Set<string> = new Set()
    
    // Try blog directory
    try {
      const blogDir = path.join(process.cwd(), "content", "blog")
      if (fs.existsSync(blogDir)) {
        const files = fs.readdirSync(blogDir)
        files
          .filter((file) => file.endsWith(".mdx"))
          .forEach((file) => blogSlugs.add(file.replace(/\.mdx$/, "")))
      }
    } catch (blogError) {
      console.error("Error reading from blog directory:", blogError)
    }
    
    // Try journal directory for backward compatibility
    try {
      const journalDir = path.join(process.cwd(), "content", "journal")
      if (fs.existsSync(journalDir)) {
        const files = fs.readdirSync(journalDir)
        files
          .filter((file) => file.endsWith(".mdx"))
          .forEach((file) => blogSlugs.add(file.replace(/\.mdx$/, "")))
      }
    } catch (journalError) {
      console.error("Error reading from journal directory:", journalError)
    }
    
    return Array.from(blogSlugs)
  } catch (error) {
    console.error("Error reading blog slugs:", error)
    return []
  }
}

// For backward compatibility
export const getAllJournalSlugs = getAllBlogSlugs

