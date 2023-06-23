import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { heart, smile } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const getIcon = (icon: string) => {
  switch (icon) {
    case "faTemperatureHigh":
      return faTemperatureHigh;
    default:
      return faTemperatureHigh;
  }
};

interface HeaderProps {
  title: string;
  icon?: string;
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
          icon={faTemperatureHigh}
          // style={{ fontSize: 100, color: "blue" }}
        />
      )}
      {subHeader && <h2>{subHeader}</h2>}
    </>
  );
};

export default Header;
