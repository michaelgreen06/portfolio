import { audioArticles } from "@/data/audio-articles";
import { resolveCanonicalAudioUrl } from "@/lib/audio";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const revalidate = 3600;

const FEED_TITLE = "Michael Green Audio";
const FEED_DESCRIPTION =
  "Article narrations from Michael Green's site: AI, technology, strategy, and the future.";
const FEED_URL = `${SITE_URL}/podcast.xml`;
const FEED_LINK = `${SITE_URL}/audio`;
const FEED_IMAGE_URL = `${SITE_URL}/placeholder-logo.png`;

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function formatDuration(totalSeconds: number) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const hh = String(hours).padStart(2, "0");
  const mm = String(minutes).padStart(2, "0");
  const ss = String(seconds).padStart(2, "0");
  return `${hh}:${mm}:${ss}`;
}

function formatRfc2822Date(dateString: string) {
  return new Date(`${dateString}T00:00:00Z`).toUTCString();
}

export async function GET() {
  const items = [...audioArticles]
    .sort((a, b) => b.publishedDate.localeCompare(a.publishedDate))
    .map((article) => {
      const episodeUrl = `${SITE_URL}/audio/${article.slug}`;
      const enclosureUrl = resolveCanonicalAudioUrl(article.audioFileName);

      return `<item>
  <title>${escapeXml(article.title)}</title>
  <link>${episodeUrl}</link>
  <guid isPermaLink="true">${episodeUrl}</guid>
  <pubDate>${formatRfc2822Date(article.publishedDate)}</pubDate>
  <description>${escapeXml(article.description)}</description>
  <author>${escapeXml(article.author)}</author>
  <itunes:author>${escapeXml(article.author)}</itunes:author>
  <itunes:summary>${escapeXml(article.description)}</itunes:summary>
  <itunes:duration>${formatDuration(article.audioDurationSeconds)}</itunes:duration>
  <enclosure url="${enclosureUrl}" length="${article.audioByteLength}" type="audio/mpeg" />
  <source url="${article.sourceUrl}">${escapeXml(article.sourceName)}</source>
</item>`;
    })
    .join("\n");

  const latestPublishedDate = [...audioArticles]
    .map((article) => article.publishedDate)
    .sort()
    .at(-1);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd">
<channel>
  <title>${FEED_TITLE}</title>
  <link>${FEED_LINK}</link>
  <atom:link href="${FEED_URL}" rel="self" type="application/rss+xml" />
  <description>${escapeXml(FEED_DESCRIPTION)}</description>
  <language>en-us</language>
  <lastBuildDate>${formatRfc2822Date(latestPublishedDate ?? "2026-01-01")}</lastBuildDate>
  <managingEditor>${escapeXml(SITE_NAME)}</managingEditor>
  <webMaster>${escapeXml(SITE_NAME)}</webMaster>
  <itunes:author>${escapeXml(SITE_NAME)}</itunes:author>
  <itunes:summary>${escapeXml(FEED_DESCRIPTION)}</itunes:summary>
  <itunes:explicit>false</itunes:explicit>
  <itunes:image href="${FEED_IMAGE_URL}" />
  <itunes:owner>
    <itunes:name>${escapeXml(SITE_NAME)}</itunes:name>
  </itunes:owner>
${items}
</channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
