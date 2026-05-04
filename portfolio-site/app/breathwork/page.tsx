import type { Metadata } from "next";
import { Volume2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

        <Card className="mb-8 animate-slide-up shadow-xl hover:shadow-2xl transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Volume2 className="h-5 w-5 text-primary" />
              1 Round + 15 min Relaxing Music
            </CardTitle>
            <CardDescription>
              One round of guided breathing followed by 15 minutes of relaxing
              music.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <audio
              id="breathwork-audio-single"
              src="/audio/breathwork-chill.mp3"
              controls
              className="w-full"
              preload="metadata"
            >
              Your browser does not support the audio element.
            </audio>
          </CardContent>
        </Card>

        <Card
          className="mb-8 animate-slide-up shadow-xl hover:shadow-2xl transition-all duration-300"
          style={{ animationDelay: "100ms" }}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Volume2 className="h-5 w-5 text-primary" />
              3 Rounds + 8 min Relaxing Music
            </CardTitle>
            <CardDescription>
              Three rounds of guided breathing followed by 8 minutes of relaxing
              music.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <audio
              id="breathwork-audio-triple"
              src="/audio/3rds-and-chill.mp3"
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
              <strong>Choosing your breathing style:</strong>
            </p>
            <p className="mt-2">
              The intensity of the breathwork depends on how you breathe:
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <strong>Most intense:</strong> breathe in and out through your
                mouth.
              </li>
              <li>
                <strong>Middle ground:</strong> breathe in through your nose
                and out through your mouth. This is sustainable whether you do
                one round or three rounds.
              </li>
              <li>
                <strong>Least intense:</strong> breathe in and out through your
                nose.
              </li>
            </ul>

            <p className="mt-4">
              <strong>Form:</strong> try to make sure your chest and belly rise
              at the same time when you inhale, and fall at the same time when
              you exhale.
            </p>

            <p className="mt-4">
              <strong>Breath holds:</strong> there are breath holds during the
              guided breathing. If at any point during a breath hold you feel
              like you need to breathe, you absolutely should. It is okay to do
              so.
            </p>

            <p className="mt-4">
              <strong>Listen to your body:</strong> you can pause the guided
              breathwork at any time if you feel overwhelmed, lightheaded, or
              just need a break.
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
