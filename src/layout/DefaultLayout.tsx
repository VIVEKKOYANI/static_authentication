import React, { ReactNode } from "react";
import Navigation from "../components/NavigationBar";

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-full">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <Navigation />
        {children}
      </div>
    </div>
  );
};

export default DefaultLayout;