import { checkForSession } from "@/shared/lib/session";
import { redirect } from "next/navigation";
import { SignUpForm } from "@/features/auth/sign-up-form";
import { SignInForm } from "@/features/auth/sign-in-form";

const page = async () => {
  const isSession = await checkForSession();
  if (isSession) redirect("/");

  return (
    <main className="flex items-center justify-around w-full flex-col grow md:flex-row p-4">
      <SignUpForm />
      <SignInForm />
    </main>
  );
};

export default page;
