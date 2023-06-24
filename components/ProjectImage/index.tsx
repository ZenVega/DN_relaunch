import React from "react";
import Image from "next/image";

interface ProjectImageProps {
  src: string;
  alt?: string;
  caption?: string;
  publication: boolean;
}
const ProjectImage: React.FC<ProjectImageProps> = ({
  src,
  alt,
  caption,
  publication = false,
}: ProjectImageProps) => {
  return (
    <div className="w-full h-full relative">
      <Image
        src={"/../public/" + src}
        alt={alt}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
      {caption && <p className="text-right text-xs">© {caption}</p>}
    </div>
  );
};

export default ProjectImage;
