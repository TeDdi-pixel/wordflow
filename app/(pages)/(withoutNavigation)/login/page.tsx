import { checkForSession } from "@/shared/lib/session";
import { redirect } from "next/navigation";
import { SignUpForm } from "@/widgets/auth/sign-up-form";
import { SignInForm } from "@/widgets/auth/sign-in-form";

const page = async () => {
  const isSession = await checkForSession();
  if (isSession) redirect("/");

  return (
    <main className="flex flex-col items-center justify-around w-full p-4 grow md:flex-row">
      <SignUpForm />
      <SignInForm />
    </main>
  );
};

export default page;
