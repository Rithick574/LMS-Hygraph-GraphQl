"use client";
import React, { useEffect } from "react";
import {getAllCourseList} from "@/app/_utils/GlobalApi";

const CourseList = () => {
  useEffect(() => {
    getAllCourse();
  }, []);
  const getAllCourse = () => {
    getAllCourseList().then((res) => {
      console.log(
        "🚀 ~ file: CourseList.jsx:11 ~ GlobalApi.getAllCourseList ~ res:",
        res
      );
    });
  };
  return <div>CourseList</div>;
};

export default CourseList;
