import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
  return rss({
    title: "Endless Queue",
    description:
      "A simple explorative journey through the fascinating world of computer science, cloud computing, and AI",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./posts/*.{md,mdx}")),
    customData: `<language>en-us</language>`,
  });
}
