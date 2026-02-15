import type { Metadata } from "next";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AudioPlayer } from "@/components/features/audio/audio-player";

export const metadata: Metadata = {
  title: "Breathwork | Michael Green",
  description: "Guided breathwork session for relaxation and focus.",
};

export default function BreathworkPage() {
  return (
    <main className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4 gradient-text">
            Breathwork Session
          </h1>
          <p className="text-xl text-muted-foreground">
            Take a moment to breathe deeply and center yourself.
          </p>
        </div>

        <div className="mb-8 animate-slide-up">
          <AudioPlayer
            src="/audio/breathwork-chill.mp3"
            title="Guided Breathwork — Relaxation & Mental Clarity"
          />
        </div>

        <Card className="animate-fade-in" style={{ animationDelay: "200ms" }}>
          <CardHeader>
            <CardTitle>About Breathwork</CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <p>
              Breathwork is a practice that involves conscious control of
              breathing patterns. It can help reduce stress, improve focus, and
              promote relaxation. Take your time with this session and find a
              comfortable, quiet space where you won&apos;t be disturbed.
            </p>
            <p className="mt-4">
              <strong>Tips for best experience:</strong>
            </p>
            <ul className="mt-2 space-y-2">
              <li>Find a quiet, comfortable space</li>
              <li>Use headphones if possible for better immersion</li>
              <li>Close your eyes and focus on your breath</li>
              <li>Let go of expectations and allow yourself to relax</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
