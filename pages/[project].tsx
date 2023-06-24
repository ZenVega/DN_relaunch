import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { mangle } from "marked-mangle";
import { gfmHeadingId } from "marked-gfm-heading-id";
import Header from "../components/Header";
import ProjectImage from "../components/ProjectImage";
import Spacer from "../components/Spacer";
import ProjectParagraph from "../components/ProjectParagraph";

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
      <Spacer height={6} />
      {/* TODO: HeroImage */}
      <Header title={meta.headline.title} subHeader={meta.headline.subtitle} />
      {meta.disclaimer && <p>{meta.disclaimer}</p>}
      {meta.content_blocks &&
        meta.content_blocks.map((block, index) => (
          <div key={index}>
            {block.in_text_image && (
              <ProjectImage
                src={block.in_text_image.image}
                alt={block.in_text_image.alt}
                publication={block.in_text_image.publication}
                caption={block.in_text_image.caption}
              />
            )}
            {block.paragraph && (
              <ProjectParagraph
                title={block.paragraph.title}
                body={block.paragraph.body}
              />
            )}
          </div>
        ))}
      {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}
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
