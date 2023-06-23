import React from "react";

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
      {subHeader && <h2>{subHeader}</h2>}
    </>
  );
};

export default Header;
