import type { Metadata } from "next";
import Link from "next/link";
import {
  Book,
  ExternalLink,
  FileText,
  Mail,
  Presentation,
  Sparkles,
  Video,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Boulder Startup Week 2026 | Michael Green",
  description:
    "Resources from Michael Green's Boulder Startup Week 2026 session: now that AI can build anything, what should you build?",
};

type ResourceLink = {
  label: string;
  href: string;
  description?: string;
  icon: React.ComponentType<{ className?: string }>;
  external?: boolean;
  internal?: boolean;
  comingSoon?: boolean;
};

const resources: ResourceLink[] = [
  {
    label: "Running Lean, 3rd Edition",
    href: "https://www.amazon.com/Running-Lean-3rd-Iterate-Works/dp/B0B6XYQBQH",
    description: "Ash Maurya's playbook for iterating from a plan A to a plan that works.",
    icon: Book,
    external: true,
  },
  {
    label: "LeanSpark — AI tool trained on the Continuous Innovation Framework",
    href: "https://leanspark.ai/r/thomastrainib",
    description: "AI coach trained on the Continuous Innovation Framework.",
    icon: Sparkles,
    external: true,
  },
  {
    label: "Free Interactive CIF Tool",
    href: "https://cif.michaelgreen06.com/",
    description: "Walk through the Continuous Innovation Framework interactively.",
    icon: Sparkles,
    external: true,
  },
  {
    label: "Blank Lean Canvas",
    href: "/files/Lean%20Canvas-blank.pdf",
    description: "Print-ready blank canvas to fill out yourself.",
    icon: FileText,
    external: true,
  },
  {
    label: "Lean Canvas with Instructions",
    href: "/files/Lean%20Canvas%20OG.pdf",
    description: "The original lean canvas with prompts in each block.",
    icon: FileText,
    external: true,
  },
  {
    label: "Slides from BSW Presentation",
    href: "https://docs.google.com/presentation/d/1az6tf3-odol3xUMZ_KxKxRB9el5tgFi3Iss4rxnRKW8/edit?usp=sharing",
    description: "Google Slides deck from the session.",
    icon: Presentation,
    external: true,
  },
  {
    label: "Recording of BSW Presentation",
    href: "#",
    description: "Coming soon.",
    icon: Video,
    comingSoon: true,
  },
  {
    label: "Let's Connect!",
    href: "/contact",
    description: "Send me a message — I'd love to hear what you're building.",
    icon: Mail,
    internal: true,
  },
];

export default function BswPage() {
  return (
    <main className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4 gradient-text">
            Boulder Startup Week 2026
          </h1>
          <p className="text-xl text-muted-foreground">
            Resources from my session at Boulder Startup Week, May 4–8, 2026.
          </p>
        </div>

        <Card className="animate-slide-up shadow-xl hover:shadow-2xl transition-all duration-300">
          <CardHeader>
            <CardTitle>
              Now that AI can build anything, what should you build?
            </CardTitle>
            <CardDescription>
              The links below are everything I referenced in the session.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {resources.map((resource) => {
                const Icon = resource.icon;

                if (resource.comingSoon) {
                  return (
                    <li
                      key={resource.label}
                      className="flex items-start gap-3 rounded-md border border-dashed border-muted-foreground/30 bg-muted/30 p-3 text-muted-foreground"
                    >
                      <Icon className="h-5 w-5 mt-0.5 shrink-0" />
                      <div className="flex-1">
                        <span className="font-medium">{resource.label}</span>
                        <span className="ml-2 text-xs uppercase tracking-wide">
                          Coming soon
                        </span>
                        {resource.description && (
                          <p className="text-sm mt-0.5">
                            {resource.description}
                          </p>
                        )}
                      </div>
                    </li>
                  );
                }

                const linkClasses =
                  "flex items-start gap-3 rounded-md border border-border p-3 hover:border-primary/60 hover:bg-accent/40 transition-colors group";

                const inner = (
                  <>
                    <Icon className="h-5 w-5 mt-0.5 shrink-0 text-primary" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 font-medium">
                        <span className="group-hover:underline">
                          {resource.label}
                        </span>
                        {resource.external && (
                          <ExternalLink className="h-4 w-4 opacity-60" />
                        )}
                      </div>
                      {resource.description && (
                        <p className="text-sm text-muted-foreground mt-0.5">
                          {resource.description}
                        </p>
                      )}
                    </div>
                  </>
                );

                if (resource.internal) {
                  return (
                    <li key={resource.label}>
                      <Link href={resource.href} className={linkClasses}>
                        {inner}
                      </Link>
                    </li>
                  );
                }

                return (
                  <li key={resource.label}>
                    <a
                      href={resource.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClasses}
                    >
                      {inner}
                    </a>
                  </li>
                );
              })}
            </ul>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
