import type { Metadata } from "next";
import { Headphones } from "lucide-react";
import { audioArticles } from "@/data/audio-articles";
import { AudioArticleCard } from "@/components/features/audio/audio-article-card";

export const metadata: Metadata = {
  title: "Audio Articles | Michael Green",
  description:
    "Listen to thought-provoking articles converted to audio. AI, technology, and the future — on the go.",
};

export default function AudioPage() {
  return (
    <main className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 animate-fade-in">
          <div className="flex items-center gap-3 mb-4">
            <Headphones className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold gradient-text">Audio Articles</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Thought-provoking articles, converted to audio so you can listen on
            the go.
          </p>
        </div>

        <div className="space-y-6">
          {audioArticles.map((article, i) => (
            <div
              key={article.slug}
              className="animate-slide-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <AudioArticleCard article={article} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
