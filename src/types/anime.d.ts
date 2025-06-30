declare global {
  interface Window {
    anime: {
      timeline: (params: { loop: boolean }) => AnimeTimeline;
    };
  }
  interface AnimeTimeline {
    add: (params: Record<string, unknown>) => AnimeTimeline;
  }
}

export {}; 