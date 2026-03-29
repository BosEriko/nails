import React, { ReactNode } from "react";
import Atom from "@atom";
import Organism from "@organism";

interface DefaultProps {
  children: ReactNode;
}

const Default: React.FC<DefaultProps> = ({ children }) => {
  return (
    <div>
      <Organism.Header />
      <div>{children}</div>
      <Organism.Footer />
    </div>
  );
};

export default Default;
