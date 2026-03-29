import React, { ReactNode } from "react";
import Atom from "@atom";
import Organism from "@organism";

interface DefaultProps {
  children: ReactNode;
}

const Default: React.FC<DefaultProps> = ({ children }) => {
  return (
    <div className="min-h-screen min-w-screen flex flex-col">
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
          <Organism.Header />
          {children}
          <Organism.Footer />
        </main>
      </div>
    </div>
  );
};

export default Default;
