Let's create a developer portfolio website for me

I want it to have the following structure:

/app
  /page.tsx                   # Landing page (Root route)
  /about/
    page.tsx                  # About page
  /projects/
    page.tsx                  # Projects listing
    /[slug]/
      page.tsx                # Individual project detail
  /journal/
    page.tsx                  # All updates/posts listing
    /[slug]/
      page.tsx                # Individual entry page
  /api/                       # API routes for future automation
    /revalidate/route.ts      # For on-demand revalidation
  
  layout.tsx                  # Root layout
  error.tsx                   # Error boundary
  loading.tsx                 # Loading UI
  not-found.tsx               # 404 handling

/components
  /ui/                        # Reusable UI components
    
  /features/                  # Feature-specific components
    /projects/
      ProjectCard.tsx
      ProjectDetails.tsx
    /journal/
      JournalEntry.tsx
  /layout/                    # Layout components
    Header.tsx
    Footer.tsx
    Navigation.tsx

/content                      # Content files
  /projects/                  # Project MDX files
  /journal/                   # Updates, posts, book notes

/lib
  /api.ts                     # Content fetching functions
  /mdx.ts                     # MDX processing utilities
  /types.ts                   # TypeScript interfaces/types
  /utils.ts                   # Utility functions

/public                       # Static assets
  /images/

/styles                       # Global styles
  /globals.css

-----

this is some of what types.ts will contain:
// /lib/types.ts
export interface Project {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  content: string;
  date: string;
}

export interface JournalEntry {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  type: 'update' | 'book' | 'learning';
  tags: string[];
  projects?: string[];
}

------

Landing Page Components (Following Modern Dev Portfolio Best Practices)

Hero Section

my name and title (e.g., "Michael Green | Frontend Developer")
Brief professional tagline highlighting my tech-for-good focus
Professional photo ()
Primary CTA button ("View My Work")

Featured Projects Section (3-4 max)

Include wetbulb35.com prominently
For each project:
Visual preview/screenshot
Brief description (2-3 sentences)
Tech stack badges
"View Project" link

Tech Stack Section

Group by category:
Frontend (React, Vue, Next.js)
Tools/Other Skills
Use visual logos with hover descriptions

Latest blog posts

Show 2-3 most recent posts
Include tags (especially for book-related content)
Brief excerpt from each

Brief "About Me" Summary

Professional focus and philosophy
Mention your e-commerce background as a strength
Link to full About page

Contact Section

Simple contact method
GitHub link
(Future: LinkedIn, Twitter)

-----
design considerations
mobile 1st design