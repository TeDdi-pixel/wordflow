import { checkForSession } from "@/shared/lib/session";
import { redirect } from "next/navigation";

const History = async () => {
  const isSession = await checkForSession();
  if (!isSession) redirect("/login");
  return <div>History</div>;
};

export default History;
