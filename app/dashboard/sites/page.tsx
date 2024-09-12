import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function SitesRoute() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  console.log(user);
  return <></>;
}
