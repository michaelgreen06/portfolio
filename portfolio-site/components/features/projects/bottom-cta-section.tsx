import Link from "next/link"
import { ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

interface BottomCTASectionProps {
  title: string
  url?: string
  ctaText?: string
  description?: string
  animationDelay?: string
}

export default function BottomCTASection({ 
  title, 
  url, 
  ctaText, 
  description, 
  animationDelay = "500ms" 
}: BottomCTASectionProps) {
  // Don't render if no URL provided
  if (!url) {
    return null
  }

  const defaultDescription = `Ready to see ${title} in action?`
  const defaultCtaText = `Visit ${title}`

  return (
    <>
      <Separator className="my-12" />
      <div className="text-center py-12 animate-fade-in" style={{ animationDelay }}>
        <h3 className="text-2xl font-bold mb-4 gradient-text">See for yourself!</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          {description || defaultDescription}
        </p>
        <Button size="lg" className="transition-all hover:scale-105" asChild>
          <Link href={url} target="_blank" rel="noopener noreferrer" className="group">
            <ExternalLink className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            {ctaText || defaultCtaText}
          </Link>
        </Button>
      </div>
    </>
  )
} 