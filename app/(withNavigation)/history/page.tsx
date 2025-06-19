import { getSession } from "@/shared/model/session";
import { redirect } from "next/navigation";

const History = async () => {
  const session = await getSession();
  if (!session) redirect("/login");
  return <div>History</div>;
};

export default History;
