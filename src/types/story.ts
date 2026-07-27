export type SceneBeat = {
  id: string;
  text: string;
  sources: string[];
  durationMs: number;
};

export type SceneTrace = {
  id: string;
  label: string;
  detail: string;
  sources: string[];
  beatIndex: number;
};

export type StoryScene = {
  id: string;
  code: string;
  chapter: string;
  title: string;
  summary: string;
  environment: string;
  ambience: string;
  overlay: string;
  sources: string[];
  beats: SceneBeat[];
  traces: SceneTrace[];
};
