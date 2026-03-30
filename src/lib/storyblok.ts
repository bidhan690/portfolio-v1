import { useStoryblokApi } from "@storyblok/astro";

export async function getProjects() {
  const storyblokApi = useStoryblokApi();

  const { data } = await storyblokApi.get("cdn/stories", {
    version: "published",
    starts_with: "projects/",
    is_startpage: false,
  });

  return data.stories;
}