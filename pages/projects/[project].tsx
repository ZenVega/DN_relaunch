import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { mangle } from "marked-mangle";
import { gfmHeadingId } from "marked-gfm-heading-id";
import Header from "../../components/Header";
import ProjectImage from "../../components/ProjectImage";
import Spacer from "../../components/Spacer";
import ProjectParagraph from "../../components/ProjectParagraph";
import ExternalLink from "../../components/ExternalLink";
import PageWrapper from "../../components/PageWrapper";
import { getProjectData } from "../../utils/getProjectData";

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
  return (
    <PageWrapper projectsMeta={meta.projects}>
      <div>
        <Spacer height={6} />
        {meta.thumbnail && (
          <ProjectImage
            src={meta.thumbnail.image}
            alt={meta.thumbnail.alt}
            publication_link={meta.thumbnail.publication_link}
            hero
          />
        )}
        <Header
          title={meta.headline.title}
          subHeader={meta.headline.subtitle}
          icon={meta.headline.icon}
        />
        {meta.disclaimer && <p className="mt-4">{meta.disclaimer}</p>}
        {meta.content_blocks &&
          meta.content_blocks.map((block, index) => (
            <div key={index}>
              {block.in_text_image && (
                <ProjectImage
                  src={block.in_text_image.image}
                  alt={block.in_text_image.alt}
                  publication_link={block.in_text_image.publication_link}
                  caption={block.in_text_image.caption}
                />
              )}
              {block.external_link_in_text && (
                <ExternalLink
                  href={block.external_link_in_text.url}
                  title={block.external_link_in_text.title}
                  subTitle={block.external_link_in_text.subTitle}
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
        {meta.external_links &&
          meta.external_links.map((link, index) => (
            <ExternalLink
              key={index}
              href={link.external_link.url}
              title={link.external_link.title}
              subTitle={link.external_link.subtitle}
            />
          ))}
      </div>
    </PageWrapper>
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

  const allProjects = getProjectData();

  return {
    props: {
      html,
      projects: allProjects,
      ...data,
    },
  };
}
