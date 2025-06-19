import { getSession } from "@/shared/model/session";
import { redirect } from "next/navigation";

const Library = async () => {
  const session = await getSession();
  if (!session) redirect("/login");
  return <div>Library</div>;
};

export default Library;
