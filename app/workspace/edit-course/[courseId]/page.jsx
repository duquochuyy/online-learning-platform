"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import CourseInfo from "../_components/CourseInfo";
import ChapterTopicList from "../_components/ChapterTopicList";

const EditCourse = ({ viewCourse = false }) => {
  const { courseId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [course, setCourse] = useState();

  useEffect(() => {
    GetCourseInfo();
  }, []);

  const GetCourseInfo = async () => {
    setIsLoading(true);
    const result = await axios.get("/api/courses?courseId=" + courseId);
    setCourse(result.data);
    setIsLoading(false);
  };

  return (
    <div className="p-10">
      <CourseInfo course={course} viewCourse={viewCourse} />
      <ChapterTopicList course={course} />
    </div>
  );
};

export default EditCourse;
