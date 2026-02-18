import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { audioArticles, getArticleBySlug } from "@/data/audio-articles";
import { AudioPlayer } from "@/components/features/audio/audio-player";

interface AudioSlugPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return audioArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: AudioSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Not Found" };
  return {
    title: `${article.title} | Audio | Michael Green`,
    description: article.description,
  };
}

export default async function AudioSlugPage({ params }: AudioSlugPageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <main className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6 animate-fade-in">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link href="/audio">
              <ArrowLeft className="h-4 w-4 mr-2" />
              All Audio Articles
            </Link>
          </Button>
          <h1 className="text-4xl font-bold mb-2 gradient-text">
            {article.title}
          </h1>
          <p className="text-muted-foreground">
            By {article.author} · {article.duration}
          </p>
        </div>

        <div className="mb-8 animate-slide-up">
          <AudioPlayer
            src={article.audioSrc}
            title={`${article.title} — ${article.author} (${article.duration})`}
          />
        </div>

        <Card className="animate-fade-in" style={{ animationDelay: "200ms" }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ExternalLink className="h-5 w-5 text-primary" />
              About This Article
            </CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <p>{article.description}</p>
            <p className="mt-4">
              <a
                href={article.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
              >
                Read the original on {article.sourceName}
                <ExternalLink className="h-4 w-4" />
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
