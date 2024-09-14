import prisma from "@/app/utils/db";
import { EmptyState } from "@/components/dashboard/EmptyState";
import { Button } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Book, PlusCircle, Settings } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

async function getData(userId: string, siteId: string) {
  const data = await prisma.post.findMany({
    where: {
      siteId: siteId,
      userId: userId,
    },
    select: {
      image: true,
      title: true,
      createdAt: true,
      id: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
}

const SiteIdRoute = async ({ params }: { params: { siteId: string } }) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    return redirect("/api/auth/login");
  }

  const data = await getData(user.id, params.siteId);
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
      {data === undefined || data.length === 0 ? (
        <EmptyState
          title="You dont have any Articles created"
          description="You currently dont have any articles. please create some so that you can see them right here"
          buttonText="Create Article"
          href={`/dashboard/sites/${params.siteId}/create`}
        />
      ) : (
        <p>Value</p>
      )}
    </>
  );
};

export default SiteIdRoute;
