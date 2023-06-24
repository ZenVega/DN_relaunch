import React from "react";
import Burger from "./Burger";
import ExternalLink from "../ExternalLink";
import InternalLink from "../InternalLink";
import Footer from "./Footer";

const standardNavLinks = [
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Compagnions",
    href: "/compagnions",
    icon: "heart",
  },
  {
    label: "Contact & Imprint",
    href: "/contact",
  },
];

const Navigation = () => {
  const [burgerOpen, burgerOpenSet] = React.useState(false);
  return (
    <>
      <Burger open={burgerOpen} setOpen={() => burgerOpenSet(!burgerOpen)} />
      {burgerOpen && (
        <div className="w-full h-full absolute p-4 bg-white z-10">
          {standardNavLinks.map((link) => (
            <InternalLink
              href={link.href}
              title={link.label}
              icon={link.icon}
            />
          ))}
        </div>
      )}
      <Footer />
    </>
  );
};

export default Navigation;
