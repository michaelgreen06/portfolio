import fs from "fs"
import path from "path"
import matter from "gray-matter"

import type { Project, JournalEntry } from "./types"

// Function to read MDX files from the content directory
export async function getProjectContent(slug: string): Promise<Project | null> {
  try {
    const filePath = path.join(process.cwd(), "content", "projects", `${slug}.mdx`)
    console.log(`Attempting to load project content for slug '${slug}' from: ${filePath}`)
    
    if (!fs.existsSync(filePath)) {
      console.warn(`Project file not found for slug: ${slug}`)
      return null
    }
    
    console.log(`Found file for slug: ${slug}`)
    const fileContent = fs.readFileSync(filePath, "utf8")

    const { data, content } = matter(fileContent)
    
    console.log(`Successfully parsed frontmatter for ${slug}:`, {
      title: data.title,
      date: data.date,
      type: data.type,
      contentLength: content.length
    })

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
    const blogFilePath = path.join(process.cwd(), "content", "blog", `${slug}.mdx`)
    console.log(`Attempting to load blog content for slug '${slug}' from: ${blogFilePath}`)
    
    if (fs.existsSync(blogFilePath)) {
      console.log(`Found file for slug: ${slug}`)
      const fileContent = fs.readFileSync(blogFilePath, "utf8")
      const { data, content } = matter(fileContent)
      
      console.log(`Successfully parsed frontmatter for ${slug}:`, {
        title: data.title,
        date: data.date,
        type: data.type,
        contentLength: content.length
      })

      return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        content,
        type: data.type,
        tags: data.tags || [],
        projects: data.projects,
        imageUrl: data.imageUrl,
      }
    }

    console.error(`File not found for slug ${slug} in blog directory: ${blogFilePath}`)
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
    console.log(`Looking for project files in: ${projectsDir}`)
    
    if (!fs.existsSync(projectsDir)) {
      console.warn(`Projects directory doesn't exist: ${projectsDir}`)
      return []
    }
    
    const files = fs.readdirSync(projectsDir)
    console.log(`Found ${files.length} files in projects directory:`, files)
    
    const mdxFiles = files.filter((file: string) => file.endsWith(".mdx"))
    console.log(`Found ${mdxFiles.length} MDX files:`, mdxFiles)
    
    const slugs = mdxFiles.map((file: string) => file.replace(/\.mdx$/, ""))
    console.log(`Extracted ${slugs.length} project slugs:`, slugs)
    
    return slugs
  } catch (error) {
    console.error("Error reading project slugs:", error)
    return []
  }
}

// Function to get all blog slugs
export async function getAllBlogSlugs(): Promise<string[]> {
  try {
    const blogDir = path.join(process.cwd(), "content", "blog")
    console.log(`Looking for blog files in: ${blogDir}`)
    
    if (fs.existsSync(blogDir)) {
      const files = fs.readdirSync(blogDir)
      console.log(`Found ${files.length} files in blog directory:`, files)
      
      const mdxFiles = files.filter((file) => file.endsWith(".mdx"))
      console.log(`Found ${mdxFiles.length} MDX files:`, mdxFiles)
      
      const slugs = mdxFiles.map((file) => file.replace(/\.mdx$/, ""))
      console.log(`Extracted ${slugs.length} slugs:`, slugs)
      
      return slugs
    } else {
      console.log(`Blog directory does not exist: ${blogDir}`)
    }
    return []
  } catch (error) {
    console.error("Error reading blog slugs:", error)
    return []
  }
}

// For backward compatibility
export const getAllJournalSlugs = getAllBlogSlugs

