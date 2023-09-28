import React from "react";
import Navigation from "../Navigation";
import Footer from "../Navigation/Footer";

interface PageWrapperProps {
  children: React.ReactNode;
  projectsMeta: any;
}
const PageWrapper = ({ children, projectsMeta }) => {
  return (
    <>
      <Navigation projectsMeta={projectsMeta} />
      <div className="max-w-3xl mx-auto px-4">{children}</div>
      <Footer projectsMeta={projectsMeta} />
    </>
  );
};

export default PageWrapper;
