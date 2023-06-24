import React from "react";

interface ProjectImageProps {
  src: string;
  alt?: string;
  caption?: string;
  publication_link?: string;
  hero?: boolean;
}

const ConditionalWrapper = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children;

const ProjectImage: React.FC<ProjectImageProps> = ({
  src,
  alt,
  caption,
  publication_link,
  hero,
}: ProjectImageProps) => {
  return (
    <div className={`w-full h-full relative mt-4 ${hero && "mb-4"}`}>
      <ConditionalWrapper
        condition={publication_link}
        wrapper={(children) => <a href={publication_link}>{children}</a>}
      >
        <img
          src={"/" + src}
          alt={alt}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
        {caption && (
          <p className="text-right text-xs font-light mt-1">© {caption}</p>
        )}
      </ConditionalWrapper>
    </div>
  );
};

export default ProjectImage;
