import {
  RegisterLink,
  LogoutLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const { getUser } = getKindeServerSession();
  const session = await getUser();

  return (
    <>
      {session ? (
        <LogoutLink>
          <Button>Log out</Button>
        </LogoutLink>
      ) : (
        <>
          <LoginLink postLoginRedirectURL="/api/auth/creation">
            <Button>Login</Button>
          </LoginLink>
          <RegisterLink postLoginRedirectURL="/api/auth/creation">
            <Button>Register</Button>
          </RegisterLink>
        </>
      )}
    </>
  );
}
