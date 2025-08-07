import { checkForSession } from "@/shared/lib/session";
import { redirect } from "next/navigation";
import { SignUpForm } from "@/features/auth/sign-up-form";
import { SignInForm } from "@/features/auth/sign-in-form";

const page = async () => {
  const isSession = await checkForSession();
  if (isSession) redirect("/");

  return (
    <div className="flex items-center justify-around w-full flex-col w-805:flex-row p-4">
      <SignUpForm />
      <SignInForm />
    </div>
  );
};

export default page;
