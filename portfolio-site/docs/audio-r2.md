# Audio Hosting on R2

Site audio is no longer meant to live in `public/audio` in git. Production audio should be uploaded to the Cloudflare R2 bucket and served from `https://audio.michaelgreen06.com`.

## App configuration

- Public audio base env var: `NEXT_PUBLIC_AUDIO_BASE_URL`
- Default when unset in every environment: `https://audio.michaelgreen06.com`
- Explicit local fallback: set `NEXT_PUBLIC_AUDIO_BASE_URL=/audio` and place temporary MP3 files in `public/audio/`

If you need local fallback during development, set `NEXT_PUBLIC_AUDIO_BASE_URL=/audio` and place temporary MP3 files in `public/audio/`.

## First-time bucket setup

```bash
wrangler r2 bucket create portfolio-audio-prod
wrangler r2 bucket domain add portfolio-audio-prod \
  --domain audio.michaelgreen06.com \
  --zone-id <your-zone-id>
```

## Upload audio

From `portfolio-site/`:

```bash
./scripts/upload-audio-to-r2.sh
```

You can point at a different source directory:

```bash
AUDIO_SOURCE_DIR=/absolute/path/to/mp3s ./scripts/upload-audio-to-r2.sh
```

## Metadata updates for new episodes

For each new narrated article:

1. Upload the MP3 to R2 with the same flat filename you want to reference in the app.
2. Add the article entry in `data/audio-articles.ts`.
3. Record `audioByteLength` and `audioDurationSeconds` from the source file:

```bash
ffprobe -v error -show_entries format=duration -of default=nk=1:nw=1 your-file.mp3
stat -f '%z' your-file.mp3
```

4. Confirm the feed output at `/podcast.xml`.
