import { EmptyState } from "@/components/dashboard/EmptyState";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import Link from "next/link";

export default async function SitesRoute() {
  return (
    <>
      <div className="flex w-full justify-end">
        <Button asChild>
          <Link href={"/dashboard/sites/new"}>
            <PlusCircle className="mr-2 size-4" /> Create Site
          </Link>
        </Button>
      </div>
      <EmptyState
        title="You dont have any Sites created"
        description="You currently dont have any Sites. Please create some so that you can
        see them right here!"
        buttonText="Create Site"
        href="/dashboard/sites/new"
      />
    </>
  );
}
