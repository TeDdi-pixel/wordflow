import { checkForSession } from "@/shared/lib/session";
import { notFound, redirect } from "next/navigation";

const Library = async () => {
  const isSession = await checkForSession();
  if (!isSession) redirect("/login");
  return notFound();
};

export default Library;
