import React from "react";
import WelcomeBanner from "./__components/WelcomeBanner";
import CourseList from "./__components/CourseList";

const Workspace = () => {
  return (
    <div className="p-10">
      <WelcomeBanner />
      <CourseList />
    </div>
  );
};

export default Workspace;
