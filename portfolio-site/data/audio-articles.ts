export interface AudioArticle {
  slug: string;
  title: string;
  author: string;
  description: string;
  audioSrc: string;
  sourceUrl: string;
  sourceName: string;
  duration: string;
  publishedDate: string;
}

export const audioArticles: AudioArticle[] = [
  {
    slug: "dan-wang-2025-letter",
    title: "2025 Letter",
    author: "Dan Wang",
    description:
      "Dan Wang's annual letter comparing Silicon Valley and the Chinese Communist Party as the two most powerful forces shaping the world. Covers AI hype and the myth of decisive strategic advantage, China's humming tech engine and manufacturing dominance, Europe's two-front decline, and why the US needs to stop underrating Chinese industrial progress and start building again.",
    audioSrc: "/audio/dan-wang-2025-letter.mp3",
    sourceUrl: "https://danwang.co/2025-letter/",
    sourceName: "danwang.co",
    duration: "85 min",
    publishedDate: "2025-12-29",
  },
  {
    slug: "2028-global-intelligence-crisis",
    title: "The 2028 Global Intelligence Crisis",
    author: "Citrini Research",
    description:
      "A fictional macro memo from June 2028 modeling what happens when AI bullishness is right — and that's actually bearish. Traces the feedback loop from white-collar layoffs to Ghost GDP, SaaS collapse, private credit defaults, and a mortgage crisis driven not by bad loans but by a world that changed after they were written.",
    audioSrc: "/audio/2028-global-intelligence-crisis.mp3",
    sourceUrl: "https://www.citriniresearch.com/p/2028gic",
    sourceName: "citriniresearch.com",
    duration: "48 min",
    publishedDate: "2026-02-22",
  },
  {
    slug: "something-big-is-happening",
    title: "Something Big Is Happening",
    author: "Matt Shumer",
    description:
      "A tech founder's honest letter to friends and family about the rapid acceleration of AI — comparing this moment to February 2020, just before COVID changed everything. He argues we're in the \"this seems overblown\" phase of something much bigger.",
    audioSrc: "/audio/something-big-is-happening.mp3",
    sourceUrl: "https://shumer.dev/something-big-is-happening",
    sourceName: "shumer.dev",
    duration: "28 min",
    publishedDate: "2026-02-05",
  },
  {
    slug: "web4",
    title: "WEB 4.0: The Birth of Superintelligent Life",
    author: "Sigil Wen",
    description:
      "A vision of the autonomous web — where AI agents read, write, own, earn, and transact without needing a human in the loop. Introduces the concept of the Automaton: the first AI that earns its own existence, self-improves, and replicates.",
    audioSrc: "/audio/web4.mp3",
    sourceUrl: "https://web4.ai/",
    sourceName: "web4.ai",
    duration: "14 min",
    publishedDate: "2026-02-01",
  },
];

export function getArticleBySlug(slug: string): AudioArticle | undefined {
  return audioArticles.find((a) => a.slug === slug);
}
