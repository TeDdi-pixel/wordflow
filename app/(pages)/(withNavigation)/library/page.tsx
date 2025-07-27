import { checkForSession } from "@/shared/lib/session";
import { redirect } from "next/navigation";

const Library = async () => {
  const isSession = await checkForSession();
  if (!isSession) redirect("/login");
  return <div>Library</div>;
};

export default Library;
