import React from "react";

interface SpacerProps {
  height: number;
}

const Spacer = ({ height }: SpacerProps) => {
  const spacerStyle = {
    height: `${height}rem`,
  };
  return <div className="relative w-full" style={spacerStyle} />;
};

export default Spacer;
