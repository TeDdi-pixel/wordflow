import { checkForSession } from "@/shared/lib/session";
import { redirect } from "next/navigation";
import { SignUpForm } from "@/features/signUpForm";
import { SignInForm } from "@/features/signInForm";

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
