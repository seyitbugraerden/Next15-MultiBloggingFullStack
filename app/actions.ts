"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { parseWithZod } from "@conform-to/zod";
import { siteSchmea } from "./utils/zodSchemas";
import prisma from "./utils/db";

const CreateSiteAction = async (prevState: any, formData: FormData) => {
  const { getUser } = getKindeServerSession();

  const user = await getUser();
  if (!user) {
    return redirect("api/auth/login");
  }
  const submission = parseWithZod(formData, {
    schema: siteSchmea,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }
  const response = await prisma.site.create({
    data: {
      description: submission.value.description,
      name: submission.value.name,
      subDirectory: submission.value.subdirectory,
      userId: user.id,
    },
  });
  return redirect("/dashboard/sites");
};

export default CreateSiteAction;
