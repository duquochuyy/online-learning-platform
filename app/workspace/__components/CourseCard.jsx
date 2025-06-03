import { Button } from "@/components/ui/button";
import { Book, PlayCircle, SettingsIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CourseCard = ({ course }) => {
  const courseJson = course?.courseJson?.course;
  return (
    <div className="shadow rounded-xl">
      <Image
        src={course?.bannerImageURL}
        alt={course?.name}
        width={400}
        height={300}
        className="w-full aspect-video rounded-xl object-cover"
      />
      <div className="p-3 flex flex-col gap-3">
        <h2 className="font-bold text-lg ">{courseJson?.name} </h2>
        <p className="line-clamp-3 text-gray-400 text-sm">
          {courseJson?.description}
        </p>
        <div className="flex justify-between items-center ">
          <h2 className="flex items-center text-sm gap-2">
            <Book className="text-primary" /> {courseJson?.noOfChapters}{" "}
            Chapters
          </h2>
          {course?.courseContent?.length ? (
            <Button size={"sm"}>
              <PlayCircle /> Start Learning
            </Button>
          ) : (
            <Link href={"/workspace/edit-course/" + course?.cid}>
              <Button size={"sm"} variant="outline">
                <SettingsIcon /> Generate Course
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
