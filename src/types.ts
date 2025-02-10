export type Post = {
  url: string;
  frontmatter: {
    layout: string;
    title: string;
    description: string;
    pubDate: string;
  };
};
