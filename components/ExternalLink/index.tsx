import React from "react";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ExternalLinkProps {
  href: string;
  title: string;
  subTitle?: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({
  href,
  title,
  subTitle,
}: ExternalLinkProps) => {
  return (
    <a target="_blanc" href={href} className="mb-4 relative block">
      <span className="text-2xl font-bold font-inter leading-6">
        {title}
        <FontAwesomeIcon
          icon={faExternalLinkAlt}
          style={{ fontSize: 12, paddingBottom: 6, marginLeft: 6 }}
        />
      </span>
      {subTitle && <span>{subTitle}</span>}
    </a>
  );
};

export default ExternalLink;
