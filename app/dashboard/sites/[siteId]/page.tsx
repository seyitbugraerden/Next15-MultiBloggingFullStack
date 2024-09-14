import { Button } from "@/components/ui/button";
import { Book, PlusCircle, Settings } from "lucide-react";
import Link from "next/link";
import React from "react";

const SiteIdRoute = () => {
  return (
    <>
      <div className="flex w-full justify-end gap-x-4">
        <Button asChild variant="secondary">
          <Link href="#">
            <Book className="size-4 mr-2" />
            View Blog
          </Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href="#">
            <Settings className="size-4 mr-2" />
            Settings
          </Link>
        </Button>
        <Button asChild>
          <Link href="#">
            <PlusCircle className="size-4 mr-2" />
            Create Article
          </Link>
        </Button>
      </div>
    </>
  );
};

export default SiteIdRoute;
