import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getIcon } from "../../utils/helpers";

interface FooterProps {
  projectsMeta: any;
}

const Footer = ({ projectsMeta }) => {
  const [nextProjectSlug, setNextProjectSlug] = React.useState(0);
  const [prevProjectSlug, setPrevProjectSlug] = React.useState(0);

  const router = useRouter();

  useEffect(() => {
    const projectSlugs = projectsMeta.map((project) => project.slug);
    const currentProjectSlug = router.asPath.slice(1);

    const projectId = projectSlugs.indexOf(currentProjectSlug);
    if (projectId === 0) {
      setPrevProjectSlug(projectSlugs[projectSlugs.length - 1]);
      setNextProjectSlug(projectSlugs[projectId + 1]);
    } else if (projectId === projectSlugs.length - 1) {
      setPrevProjectSlug(projectSlugs[projectId - 1]);
      setNextProjectSlug(projectSlugs[0]);
    } else {
      setPrevProjectSlug(projectSlugs[projectId - 1]);
      setNextProjectSlug(projectSlugs[projectId + 1]);
    }
  });
  return (
    <div className="bg-black text-white fixed bottom-0 w-full h-14 flex items-center justify-between px-4 font-inter text-xl font-semibold">
      <span>Footer</span>
      <div className="text-black bg-white rounded-full flex justify-between w-20 h-10 items-center">
        <Link
          className="flex items-center justify-center w-1/2"
          href={`/${nextProjectSlug}`}
        >
          <FontAwesomeIcon
            icon={getIcon("chevron-left")}
            style={{ fontSize: 12, paddingRight: 3 }}
          />
        </Link>
        <Link
          className="flex items-center justify-center w-1/2"
          href={`/${prevProjectSlug}`}
        >
          <FontAwesomeIcon
            icon={getIcon("chevron-right")}
            style={{ fontSize: 12, paddingLeft: 3 }}
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
