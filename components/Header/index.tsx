import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { getIcon } from "../../utils/helpers";

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
      <h1 className="text-2xl font-extrabold font-inter leading-6">
        {title}
        {icon && (
          <FontAwesomeIcon
            icon={getIcon(icon)}
            style={{ fontSize: 12, paddingBottom: 6, marginLeft: 6 }}
          />
        )}
      </h1>
      {subHeader && (
        <h2 className="text-base leading-4 font-semibold mt-1">{subHeader}</h2>
      )}
    </>
  );
};

export default Header;
