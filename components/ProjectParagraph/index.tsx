import React from "react";

interface ProjectParagraphProps {
  title?: string;
  body: string;
}

const ProjectParagraph: React.FC<ProjectParagraphProps> = ({
  title,
  body,
}: ProjectParagraphProps) => {
  return (
    <div>
      {title && <strong>{title}</strong>}
      <br />
      <p>{body}</p>
    </div>
  );
};

export default ProjectParagraph;
