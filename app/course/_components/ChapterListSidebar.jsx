import React, { useContext } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SelectedChapterIndexContext } from "@/context/SelectedChapterIndexContext";

const ChapterListSidebar = ({ courseInfo }) => {
  const course = courseInfo?.courses;
  const enrollCourse = courseInfo?.enrollCourse;
  const courseContent = courseInfo?.courses?.courseContent;
  const { selectedChapterIndex, setSelectedChapterIndex } = useContext(
    SelectedChapterIndexContext
  );
  let completedChapter = enrollCourse?.completedChapters ?? [];

  return (
    <div className="w-80 bg-secondary h-screen p-5">
      <h2 className="my-3 font-bold text-xl">Chapters</h2>
      <Accordion type="single" collapsible>
        {courseContent?.map((chapter, index) => (
          <AccordionItem
            value={chapter?.courseData?.chapterName}
            key={index}
            onClick={() => setSelectedChapterIndex(index)}
          >
            <AccordionTrigger
              className={`font-medium text-lg p-5 ${
                completedChapter?.includes(index) ? "bg-green-100" : "bg-white"
              }`}
            >
              {index + 1}. {chapter?.courseData?.chapterName}
            </AccordionTrigger>
            <AccordionContent asChild>
              <div className="">
                {chapter?.courseData?.topics.map((topic, index_) => (
                  <h2
                    key={index_}
                    className={`p-3 ${
                      completedChapter?.includes(index)
                        ? "bg-green-100"
                        : "bg-white"
                    } my-1 rounded-lg`}
                  >
                    {topic?.topic}
                  </h2>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default ChapterListSidebar;
