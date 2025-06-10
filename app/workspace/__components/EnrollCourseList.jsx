"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import EnrollCourseCard from "./EnrollCourseCard";

const EnrollCourseList = () => {
  const [enrollCourseList, setEnrollCourseList] = useState([]);

  useEffect(() => {
    getEnrolledCourse();
  }, []);

  const getEnrolledCourse = async () => {
    const result = await axios.get("/api/enroll-course");
    console.log(result.data);
    setEnrollCourseList(result.data);
  };
  return (
    enrollCourseList?.length > 0 && (
      <div className="mt-3">
        <h2 className="font-bold text-3xl">Continue Learning Your Courses</h2>
        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
          {enrollCourseList?.map((course, index) => (
            <EnrollCourseCard
              key={index}
              enrollCourse={course?.enrollCourse}
              course={course?.courses}
            />
          ))}
        </div>
      </div>
    )
  );
};

export default EnrollCourseList;
