#!/usr/bin/env bash

set -euo pipefail

BUCKET_NAME="${BUCKET_NAME:-portfolio-audio-prod}"
AUDIO_SOURCE_DIR="${AUDIO_SOURCE_DIR:-./public/audio}"
AUDIO_PUBLIC_DOMAIN="${AUDIO_PUBLIC_DOMAIN:-audio.michaelgreen06.com}"

if ! command -v wrangler >/dev/null 2>&1; then
  echo "wrangler is required on PATH"
  exit 1
fi

if [ ! -d "$AUDIO_SOURCE_DIR" ]; then
  echo "audio source directory not found: $AUDIO_SOURCE_DIR"
  exit 1
fi

echo "Uploading MP3 files from $AUDIO_SOURCE_DIR to $BUCKET_NAME"

find "$AUDIO_SOURCE_DIR" -maxdepth 1 -type f -name '*.mp3' | sort | while read -r file; do
  name="$(basename "$file")"
  echo "put $name"
  wrangler r2 object put "${BUCKET_NAME}/${name}" --file "$file" --remote
done

cat <<EOF

Upload complete.

If this is first-time setup, run:
  wrangler r2 bucket create ${BUCKET_NAME}
  wrangler r2 bucket domain add ${BUCKET_NAME} --domain ${AUDIO_PUBLIC_DOMAIN} --zone-id <your-zone-id>

Then verify a sample object:
  curl -I https://${AUDIO_PUBLIC_DOMAIN}/$(find "$AUDIO_SOURCE_DIR" -maxdepth 1 -type f -name '*.mp3' | sort | head -n 1 | xargs basename)
EOF
