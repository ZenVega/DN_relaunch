import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getIcon } from "../../utils/helpers";

interface InternalLinkProps {
  href: string;
  title: string;
  icon?: string;
}

const InternalLink: React.FC<InternalLinkProps> = ({
  href,
  title,
  icon,
}: InternalLinkProps) => {
  console.log(href, title, icon);
  return (
    <a
      target="_blanc"
      href={href}
      className="mb-4 relative flex flex-col gap-1"
    >
      <span className="text-2xl font-bold font-inter leading-6">
        {title}
        {icon && (
          <FontAwesomeIcon
            icon={getIcon(icon)}
            style={{ fontSize: 12, paddingBottom: 6, marginLeft: 6 }}
          />
        )}
        <br />
      </span>
    </a>
  );
};

export default InternalLink;
