import React from "react";
import Navigation from "../Navigation";

const PageWrapper = ({ children }) => {
  return (
    <>
      <Navigation />
      <div className="max-w-3xl mx-auto px-4">{children}</div>
    </>
  );
};

export default PageWrapper;
