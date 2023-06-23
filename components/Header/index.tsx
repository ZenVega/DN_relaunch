import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faSmile } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const getIcon = (icon: string) => {
  switch (icon) {
    case "smile":
      return faSmile;
    case "heart":
      return faHeart;
    case "link-external":
      return faExternalLinkAlt;
    default:
      return undefined;
  }
};

interface HeaderProps {
  title: string;
  icon?: "smile" | "heart" | "link-external";
  subHeader?: string;
}

const Header: React.FC<HeaderProps> = ({
  title,
  subHeader,
  icon,
}: HeaderProps) => {
  return (
    <>
      <h1 className="text-3xl font-bold">{title}</h1>
      {icon && (
        <FontAwesomeIcon
          icon={getIcon(icon)}
          // style={{ fontSize: 100, color: "blue" }}
        />
      )}
      {subHeader && <h2>{subHeader}</h2>}
    </>
  );
};

export default Header;
