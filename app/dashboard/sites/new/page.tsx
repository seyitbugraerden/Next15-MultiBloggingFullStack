import { SubmitButton } from "@/components/dashboard/SubmitButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const NewSiteRoute = () => {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Create Site</CardTitle>
          <CardDescription>
            Create your Site here. Click the button below once your done...
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-y-6">
            <div className="grid gap-2">
              <Label>Site Name</Label>
              <Input placeholder="Site Name" />
              <p className="text-red-500 text-sm">Lorem, ipsum.</p>
            </div>

            <div className="grid gap-2">
              <Label>Subdirectory</Label>
              <Input placeholder="Subdirectory" />
              <p className="text-red-500 text-sm">Lorem, ipsum.</p>
            </div>

            <div className="grid gap-2">
              <Label>Description</Label>
              <Textarea className="resize-none" placeholder="Small Description for your site" />
              <p className="text-red-500 text-sm">Lorem, ipsum.</p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <SubmitButton text="Create Site" />
        </CardFooter>
      </Card>
    </div>
  );
};

export default NewSiteRoute;
