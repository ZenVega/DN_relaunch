import React from "react";
import Burger from "./Burger";
import { getIcon } from "../../utils/helpers";
import InternalLink from "../InternalLink";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const standardNavLinks = [
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

interface NavLinkProps {
  projectsMeta: any[];
}
const Navigation = ({ projectsMeta }: NavLinkProps) => {
  console.log(projectsMeta);
  const [burgerOpen, burgerOpenSet] = React.useState(false);
  const [projectsOpen, projectsOpenSet] = React.useState(true);

  return (
    <>
      <Burger open={burgerOpen} setOpen={() => burgerOpenSet(!burgerOpen)} />
      {burgerOpen && (
        <div
          className={`w-2xfull h-full flex absolute bg-white z-10 ease-in duration-200 ${
            projectsOpen ? "-translate-x-1/2" : "translate-x-0"
          }`}
        >
          <div id="nav-left" className="p-4 w-screen">
            <button
              className="text-2xl font-bold font-inter leading-6 mb-4"
              onClick={() => projectsOpenSet(true)}
            >
              Projects
            </button>
            {standardNavLinks.map((link) => (
              <InternalLink
                href={link.href}
                title={link.label}
                icon={link.icon}
              />
            ))}
            <div className="bg-black text-white fixed bottom-0 -ml-4 w-full h-14 flex items-center justify-start px-4 font-inter text-xl font-semibold">
              <span>{"Menue"}</span>
            </div>
          </div>
          <div id="nav-right" className="p-4 w-screen ">
            <button
              className="text-l font-bold font-inter leading-6 mb-4 flex gap-1 items-end"
              onClick={() => projectsOpenSet(false)}
            >
              <FontAwesomeIcon
                icon={getIcon("arrow-left")}
                style={{ fontSize: 12, paddingBottom: 6, marginLeft: 6 }}
              />
              back
            </button>
            {projectsMeta.map((project) => (
              <InternalLink
                href={`/projects/${project.slug}`}
                title={project.title}
                subTitle={project.subTitle}
              />
            ))}
            <div className="bg-black text-white fixed bottom-0 -ml-4 w-full h-14 flex items-center justify-start px-4 font-inter text-xl font-semibold">
              <span>{"Projects"}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
