import { Button } from "@/components/ui/button";
import { SelectedChapterIndexContext } from "@/context/SelectedChapterIndexContext";
import axios from "axios";
import {
  CheckCircle,
  Cross,
  Loader,
  Loader2Icon,
  X,
  Youtube,
} from "lucide-react";
import { useParams } from "next/navigation";
import React, { useContext, useState } from "react";
import YouTube from "react-youtube";
import { toast } from "sonner";

const ChapterContent = ({ courseInfo, refreshData }) => {
  const { courseId } = useParams();
  const { course, enrollCourse } = courseInfo ?? "";
  const courseContent = courseInfo?.courses?.courseContent;
  const { selectedChapterIndex, setSelectedChapterIndex } = useContext(
    SelectedChapterIndexContext
  );
  const videoData = courseContent?.[selectedChapterIndex]?.youtubeVideo;
  const topics = courseContent?.[selectedChapterIndex]?.courseData?.topics;
  const [loading, setLoading] = useState(false);
  let completedChapter = enrollCourse?.completedChapters ?? [];

  const markChapterCompleted = async () => {
    setLoading(true);
    completedChapter?.push(selectedChapterIndex);
    const result = await axios.put("/api/enroll-course", {
      completedChapter: completedChapter,
      courseId: courseId,
    });
    console.log(result.data);
    refreshData();
    toast.success("Chapter Marked Completed");
    setLoading(false);
  };

  const markInCompletedChapter = async () => {
    setLoading(true);

    const completedChap = completedChapter?.filter(
      (item) => item != selectedChapterIndex
    );
    completedChapter?.push(selectedChapterIndex);
    const result = await axios.put("/api/enroll-course", {
      completedChapter: completedChap,
      courseId: courseId,
    });
    console.log(result.data);
    refreshData();
    toast.success("Chapter Marked InCompleted");
    setLoading(false);
  };

  return (
    <div className="p-5">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl">
          {selectedChapterIndex + 1}.{" "}
          {courseContent?.[selectedChapterIndex]?.courseData?.chapterName}
        </h2>
        {!completedChapter?.includes(selectedChapterIndex) ? (
          <Button onClick={() => markChapterCompleted()} disabled={loading}>
            {loading ? (
              <Loader2Icon className="animate-spin" />
            ) : (
              <CheckCircle />
            )}{" "}
            Mark as Completed{" "}
          </Button>
        ) : (
          <Button
            variant="outline"
            onClick={() => markInCompletedChapter()}
            disabled={loading}
          >
            {loading ? <Loader2Icon className="animate-spin" /> : <X />} Mark
            completed
          </Button>
        )}
      </div>
      <h2 className="my-2 font-bold text-lg">Related Videos 🎬</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {videoData?.map(
          (video, index) =>
            index < 2 && (
              <div key={index}>
                <YouTube
                  videoId={video?.videoId}
                  opts={{
                    height: "260",
                    width: "460",
                  }}
                />
              </div>
            )
        )}
      </div>
      <div className="mt-7">
        {topics?.map((topic, index) => (
          <div className="mt-10 p-5 bg-secondary rounded-2xl" key={index}>
            <h2 className="font-bold text-2xl text-primary">
              {index + 1}. {topic?.topic}
            </h2>
            <div
              className="max-w-full overflow-x-auto"
              dangerouslySetInnerHTML={{ __html: topic?.content }}
              style={{
                lineHeight: "2.5",
                wordBreak: "break-word",
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChapterContent;
