import { Button } from "@/components/ui/button";
import { Facebook, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col gap-3 items-center">
        <h2 className="font-bold text-3xl text-primary">Hello Everybody</h2>
        <h3 className="font-bold text-2xl">
          I want to try create a website after 2 years :(
        </h3>
        <Link href={"/workspace"}>
          <Button className="w-full">Click Here To Visit Website</Button>
        </Link>
        <div className="flex gap-3 mt-4 justify-center">
          <Link href="https://www.facebook.com/duquochuyy" target="_blank">
            <Button variant="outline" size="icon">
              <Facebook className="w-5 h-5" />
            </Button>
          </Link>
          <Link href="https://github.com/duquochuyy" target="_blank">
            <Button variant="outline" size="icon">
              <Github className="w-5 h-5" />
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/duquochuyy/" target="_blank">
            <Button variant="outline" size="icon">
              <Linkedin className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
