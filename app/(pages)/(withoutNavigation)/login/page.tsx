import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { AdditionalEntranceForm, SignInForm, SignUpForm } from "@/widgets/auth";
import { IoEnter } from "react-icons/io5";
import AuthFormName from "@/shared/components/form/AuthFormName";

const page = async () => {
  const session = await auth();
  if (session) redirect("/");

  return (
    <div className="relative flex flex-col items-center justify-around w-full p-4 grow md:flex-row">
      <SignUpForm />

      <div className="flex flex-col gap-[8px] max-w-[272px] w-full -translate-y-1/2">
        <AuthFormName icon={<IoEnter className="text-[20px]" />} name="login" />

        <AdditionalEntranceForm />

        <div className="md:max-w-[272px] w-full">
          <span className="flex items-center before:mr-2 before:flex-1 before:h-1 before:bg-foreground after:ml-2 after:flex-1 after:h-1 after:bg-foreground">
            or
          </span>
        </div>

        <SignInForm />
      </div>
    </div>
  );
};

export default page;
