import React from "react";
import WelcomeBanner from "./__components/WelcomeBanner";
import CourseList from "./__components/CourseList";
import EnrollCourseList from "./__components/EnrollCourseList";

const Workspace = () => {
  return (
    <div className="p-10">
      <WelcomeBanner />
      <EnrollCourseList/>
      <CourseList />
    </div>
  );
};

export default Workspace;
