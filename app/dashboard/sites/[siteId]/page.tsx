import prisma from "@/app/utils/db";
import { Button } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Book, PlusCircle, Settings } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

async function getData() {
  const data = await prisma.post.findMany({
    where: {},
  });
}

const SiteIdRoute = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/api/auth/login");
  }
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
