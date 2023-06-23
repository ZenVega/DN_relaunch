import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { mangle } from "marked-mangle";
import { gfmHeadingId } from "marked-gfm-heading-id";

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join(process.cwd(), "content", "projects"));

  const paths = files.map((filename) => ({
    params: {
      project: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

interface Props {
  html: string;
}

export default function ProjectPage({ html, ...meta }: Props & any) {
  console.log("meta", meta);
  return (
    <div>
      <h1>{meta.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

export async function getStaticProps({ params: { project } }) {
  const markdownWithMetadata = fs
    .readFileSync(
      path.join(process.cwd(), "content", "projects", `${project}.md`)
    )
    .toString();

  const { data, content } = matter(markdownWithMetadata);
  marked.use(mangle());
  const options = {
    prefix: "my-prefix-",
  };

  marked.use(gfmHeadingId(options));

  const html = marked(content);

  return {
    props: {
      html,
      ...data,
    },
  };
}
