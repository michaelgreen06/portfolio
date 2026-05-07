import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BSW Presentation Recording | Michael Green",
  description: "Recording of Michael Green's Boulder Startup Week 2026 presentation.",
};

export default function BswRecordingPage() {
  return (
    <main className="min-h-screen bg-black px-4 py-6 md:px-8 md:py-10">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-6xl items-center justify-center">
        <div className="w-full aspect-video overflow-hidden rounded-lg border border-white/10 bg-black shadow-2xl">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/SnGrTlY3DqA"
            title="BSW Presentation Recording"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </main>
  );
}
