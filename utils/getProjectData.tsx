import fs from "fs";
import matter from "gray-matter";

export function getProjectData() {
  const files = fs.readdirSync("content/projects");

  const projects = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`content/projects/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      title: frontmatter.headline.title,
      subTitle: frontmatter.headline.subtitle,
    };
  });
  return projects;
}
