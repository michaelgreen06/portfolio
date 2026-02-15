"use client";

import * as React from "react";
import { useRef, useState, useEffect, useCallback } from "react";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Gauge,
} from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface AudioPlayerProps {
  src: string;
  title?: string;
  className?: string;
}

const PLAYBACK_SPEEDS = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];
const SKIP_SECONDS = 15;

function formatTime(seconds: number): string {
  if (!isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function AudioPlayer({ src, title, className }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);

  const audio = audioRef.current;

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;

    const onLoadedMetadata = () => {
      setDuration(el.duration);
      setIsLoaded(true);
    };
    const onTimeUpdate = () => setCurrentTime(el.currentTime);
    const onEnded = () => setIsPlaying(false);
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    el.addEventListener("loadedmetadata", onLoadedMetadata);
    el.addEventListener("timeupdate", onTimeUpdate);
    el.addEventListener("ended", onEnded);
    el.addEventListener("play", onPlay);
    el.addEventListener("pause", onPause);

    // If metadata already loaded (cached)
    if (el.readyState >= 1) {
      onLoadedMetadata();
    }

    return () => {
      el.removeEventListener("loadedmetadata", onLoadedMetadata);
      el.removeEventListener("timeupdate", onTimeUpdate);
      el.removeEventListener("ended", onEnded);
      el.removeEventListener("play", onPlay);
      el.removeEventListener("pause", onPause);
    };
  }, []);

  const togglePlay = useCallback(() => {
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
  }, [audio, isPlaying]);

  const skip = useCallback(
    (seconds: number) => {
      if (!audio) return;
      audio.currentTime = Math.min(
        Math.max(audio.currentTime + seconds, 0),
        audio.duration || 0
      );
    },
    [audio]
  );

  const handleSeek = useCallback(
    (value: number[]) => {
      if (!audio) return;
      audio.currentTime = value[0];
      setCurrentTime(value[0]);
    },
    [audio]
  );

  const handleVolumeChange = useCallback(
    (value: number[]) => {
      if (!audio) return;
      const v = value[0];
      audio.volume = v;
      setVolume(v);
      if (v === 0) {
        setIsMuted(true);
      } else if (isMuted) {
        setIsMuted(false);
      }
    },
    [audio, isMuted]
  );

  const toggleMute = useCallback(() => {
    if (!audio) return;
    if (isMuted) {
      audio.volume = volume || 0.5;
      audio.muted = false;
      setIsMuted(false);
      if (volume === 0) setVolume(0.5);
    } else {
      audio.muted = true;
      setIsMuted(true);
    }
  }, [audio, isMuted, volume]);

  const cyclePlaybackRate = useCallback(() => {
    if (!audio) return;
    const currentIndex = PLAYBACK_SPEEDS.indexOf(playbackRate);
    const nextIndex = (currentIndex + 1) % PLAYBACK_SPEEDS.length;
    const newRate = PLAYBACK_SPEEDS[nextIndex];
    audio.playbackRate = newRate;
    setPlaybackRate(newRate);
  }, [audio, playbackRate]);

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <TooltipProvider delayDuration={300}>
      <div
        className={cn(
          "rounded-xl border bg-card p-4 sm:p-6 space-y-4",
          className
        )}
      >
        <audio ref={audioRef} src={src} preload="metadata" />

        {title && (
          <p className="text-sm font-medium text-muted-foreground truncate">
            {title}
          </p>
        )}

        {/* Progress bar */}
        <div className="space-y-2">
          <Slider
            value={[currentTime]}
            max={duration || 100}
            step={1}
            onValueChange={handleSeek}
            className="cursor-pointer"
          />
          <div className="flex justify-between text-xs text-muted-foreground font-mono">
            <span>{formatTime(currentTime)}</span>
            <span>{isLoaded ? formatTime(duration) : "--:--"}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between">
          {/* Left: playback speed */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                onClick={cyclePlaybackRate}
                className="font-mono text-xs min-w-[3.5rem] gap-1"
              >
                <Gauge className="h-3.5 w-3.5" />
                {playbackRate}x
              </Button>
            </TooltipTrigger>
            <TooltipContent>Playback speed</TooltipContent>
          </Tooltip>

          {/* Center: transport controls */}
          <div className="flex items-center gap-1 sm:gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => skip(-SKIP_SECONDS)}
                  className="h-9 w-9"
                >
                  <SkipBack className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>{SKIP_SECONDS}s back</TooltipContent>
            </Tooltip>

            <Button
              variant="default"
              size="icon"
              onClick={togglePlay}
              className="h-12 w-12 rounded-full shadow-lg"
            >
              {isPlaying ? (
                <Pause className="h-5 w-5" />
              ) : (
                <Play className="h-5 w-5 ml-0.5" />
              )}
            </Button>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => skip(SKIP_SECONDS)}
                  className="h-9 w-9"
                >
                  <SkipForward className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>{SKIP_SECONDS}s forward</TooltipContent>
            </Tooltip>
          </div>

          {/* Right: volume */}
          <div className="flex items-center gap-1">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleMute}
                  className="h-9 w-9"
                >
                  {isMuted || volume === 0 ? (
                    <VolumeX className="h-4 w-4" />
                  ) : (
                    <Volume2 className="h-4 w-4" />
                  )}
                </Button>
              </TooltipTrigger>
              <TooltipContent>{isMuted ? "Unmute" : "Mute"}</TooltipContent>
            </Tooltip>
            <Slider
              value={[isMuted ? 0 : volume]}
              max={1}
              step={0.05}
              onValueChange={handleVolumeChange}
              className="w-20 hidden sm:flex cursor-pointer"
            />
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
