import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Sparkle } from "lucide-react";

const AddNewCourseDialog = ({ children }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    includeVideo: false,
    noOfChapters: 1,
    level: "",
    category: "",
  });
  const onHandleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    console.log(formData);
  };
  const onGenerate = () => {
    console.log(formData);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Course Using AI</DialogTitle>
          <DialogDescription asChild className="mt-6">
            <div className="flex flex-col gap-4">
              <div>
                <label>Course Name</label>
                <Input
                  placeholder="Course Name"
                  onChange={(event) =>
                    onHandleInputChange("name", event?.target.value)
                  }
                />
              </div>
              <div>
                <label>Course Description (optional)</label>
                <Textarea
                  placeholder="Course Description"
                  onChange={(event) =>
                    onHandleInputChange("description", event?.target.value)
                  }
                />
              </div>
              <div>
                <label>No Of Chapters</label>
                <Input
                  placeholder="No Of Chapters"
                  type="number"
                  onChange={(event) =>
                    onHandleInputChange("noOfChapters", event?.target.value)
                  }
                />
              </div>
              <div className="flex gap-3 items-center">
                <label>Include Video</label>
                <Switch
                  checked={formData.includeVideo}
                  onCheckedChange={() =>
                    onHandleInputChange("includeVideo", !formData?.includeVideo)
                  }
                />
              </div>
              <div>
                <label>Difficuly Level</label>
                <Select
                  className="mt-1"
                  onValueChange={(value) => onHandleInputChange("level", value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label>Category</label>
                <Input
                  placeholder="Category (Separated by Comma)"
                  onChange={(event) =>
                    onHandleInputChange("category", event?.target.value)
                  }
                />
              </div>
              <div className="mt-5">
                <Button className="w-full" onClick={onGenerate}>
                  <Sparkle /> Generate Course
                </Button>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewCourseDialog;
