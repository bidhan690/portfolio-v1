export interface StoryblokAsset {
  filename: string;
  alt?: string;
  title?: string;
}

export interface StoryblokProjectContent {
  title?: string;
  description?: string;
  tags?: string[];
  longImage?: StoryblokAsset;
  browserUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface StoryblokProjectStory {
  content: StoryblokProjectContent;
}

export interface Project {
  label: string;
  title: string;
  description: string;
  tags: string[];
  longImage: string;
  browserUrl: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  reverse: boolean;
}

