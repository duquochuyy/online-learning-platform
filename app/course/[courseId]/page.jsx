"use client";
import AppHeader from "@/app/workspace/__components/AppHeader";
import React, { useEffect, useState } from "react";
import ChapterListSidebar from "../_components/ChapterListSidebar";
import ChapterContent from "../_components/ChapterContent";
import { useParams } from "next/navigation";
import axios from "axios";

const Course = () => {
  const { courseId } = useParams();
  const [courseInfo, setCourseInfo] = useState();
  useEffect(() => {
    getEnrolledCourseById();
  }, []);

  const getEnrolledCourseById = async () => {
    const result = await axios.get("/api/enroll-course?courseId=" + courseId);
    console.log(result.data);
    setCourseInfo(result.data);
  };

  return (
    <div>
      <AppHeader hideSidebar={true} />
      <div className="flex gap-10">
        <ChapterListSidebar courseInfo={courseInfo} />
        <ChapterContent courseInfo={courseInfo} refreshData={() => getEnrolledCourseById()}/>
      </div>
    </div>
  );
};

export default Course;
