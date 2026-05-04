"use client";

import Link from "next/link";
import { ExternalLink, Headphones, Clock, User } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { AudioArticle } from "@/data/audio-articles";

interface AudioArticleCardProps {
  article: AudioArticle;
}

export function AudioArticleCard({ article }: AudioArticleCardProps) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:border-primary/20">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1 flex-1">
            <CardTitle className="text-xl group-hover:text-primary transition-colors">
              {article.title}
            </CardTitle>
            <CardDescription className="flex items-center gap-3 text-sm">
              <span className="flex items-center gap-1">
                <User className="h-3.5 w-3.5" />
                {article.author}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {article.duration}
              </span>
            </CardDescription>
          </div>
          <Badge variant="secondary" className="shrink-0">
            <Headphones className="h-3 w-3 mr-1" />
            Audio
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground text-sm leading-relaxed">
          {article.description}
        </p>
        <div className="flex items-center gap-3">
          <Button asChild>
            <Link href={`/audio/${article.slug}`}>
              <Headphones className="h-4 w-4 mr-2" />
              Listen
            </Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a
              href={article.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
              {article.sourceName}
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
