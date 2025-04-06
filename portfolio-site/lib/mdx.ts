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
  try {
    const filePath = path.join(process.cwd(), "content", "blog", `${slug}.mdx`)
    const fileContent = fs.readFileSync(filePath, "utf8")

    const { data, content } = matter(fileContent)

    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      content,
      type: data.type,
      tags: data.tags,
      projects: data.projects,
    }
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
    return files.filter((file) => file.endsWith(".mdx")).map((file) => file.replace(/\.mdx$/, ""))
  } catch (error) {
    console.error("Error reading project slugs:", error)
    return []
  }
}

// Function to get all blog slugs
export async function getAllBlogSlugs(): Promise<string[]> {
  try {
    const blogDir = path.join(process.cwd(), "content", "blog")
    const files = fs.readdirSync(blogDir)
    return files.filter((file) => file.endsWith(".mdx")).map((file) => file.replace(/\.mdx$/, ""))
  } catch (error) {
    console.error("Error reading blog slugs:", error)
    return []
  }
}

// For backward compatibility
export const getAllJournalSlugs = getAllBlogSlugs

