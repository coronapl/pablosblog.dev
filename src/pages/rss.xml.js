import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
  return rss({
    title: `Pablo's Blog`,
    description: "A simple blog about AI, cloud computing, and more..",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./posts/*.{md,mdx}")),
    customData: `<language>en-us</language>`,
  });
}
