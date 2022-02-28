import React, { ReactNode } from "react";

const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid grid-cols-12 xl:grid-cols-6 pb-10">
      <div className="col-span-10 col-start-2 xl:col-span-4 xl:col-start-2">
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
