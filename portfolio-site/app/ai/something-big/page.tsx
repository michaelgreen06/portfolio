import type { Metadata } from "next";
import { Volume2, ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Something Big Is Happening | Michael Green",
  description:
    "Listen to Matt Shumer's essay on the rapid acceleration of AI — converted to audio with Kokoro TTS.",
};

export default function SomethingBigPage() {
  return (
    <main className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4 gradient-text">
            Something Big Is Happening
          </h1>
          <p className="text-xl text-muted-foreground">
            An essay by{" "}
            <a
              href="https://x.com/mattshumer_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Matt Shumer
            </a>{" "}
            on the rapid acceleration of AI — and what it means for all of us.
          </p>
        </div>

        <Card className="mb-8 animate-slide-up shadow-xl hover:shadow-2xl transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Volume2 className="h-5 w-5 text-primary" />
              Listen to the Article
            </CardTitle>
            <CardDescription>
              Full article narrated with Kokoro TTS (~15 minutes).
            </CardDescription>
          </CardHeader>
          <CardContent>
            <audio
              src="/audio/something-big-is-happening.mp3"
              controls
              className="w-full"
              preload="metadata"
            >
              Your browser does not support the audio element.
            </audio>
          </CardContent>
        </Card>

        <Card className="animate-fade-in" style={{ animationDelay: "200ms" }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ExternalLink className="h-5 w-5 text-primary" />
              Read the Original
            </CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <p>
              This audio was generated from Matt Shumer&apos;s essay about the
              current state of AI progress — comparing this moment to February
              2020, just before COVID changed everything. He argues we&apos;re in
              the &quot;this seems overblown&quot; phase of something much bigger.
            </p>
            <p className="mt-4">
              <a
                href="https://shumer.dev/something-big-is-happening"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
              >
                Read the full article on shumer.dev
                <ExternalLink className="h-4 w-4" />
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
