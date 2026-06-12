import { AUDIO_BASE_URL } from "@/lib/site";

function trimTrailingSlash(value: string) {
  return value.replace(/\/+$/, "");
}

function normalizeAudioObjectKey(audioPath: string) {
  return audioPath.replace(/^\/+/, "").replace(/^audio\//, "");
}

function getConfiguredAudioBaseUrl() {
  const configured = process.env.NEXT_PUBLIC_AUDIO_BASE_URL?.trim();
  if (configured) {
    return trimTrailingSlash(configured);
  }

  return AUDIO_BASE_URL;
}

export function resolveAudioUrl(audioPath: string) {
  if (/^https?:\/\//i.test(audioPath)) {
    return audioPath;
  }

  const objectKey = normalizeAudioObjectKey(audioPath);
  const baseUrl = getConfiguredAudioBaseUrl();

  return `${baseUrl}/${objectKey}`;
}

export function resolveCanonicalAudioUrl(audioPath: string) {
  if (/^https?:\/\//i.test(audioPath)) {
    return audioPath;
  }

  const objectKey = normalizeAudioObjectKey(audioPath);
  const baseUrl = getConfiguredAudioBaseUrl() ?? AUDIO_BASE_URL;
  return `${baseUrl}/${objectKey}`;
}
