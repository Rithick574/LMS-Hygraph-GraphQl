import React from "react";
import SideNav from "./_components/SideNav";

const layout = ({ children }) => {
  return (
    <div>
      <div className="sm:w-64 hidden sm:block fixed bg-red-500">
        <SideNav />
      </div>
      <div className="ml-64 bg-yellow-700">{children}</div>
    </div>
  );
};

export default layout;
