import { auth } from "@/auth";
import { notFound, redirect } from "next/navigation";

const Library = async () => {
  const session = await auth();
  if (!session) redirect("/login");
  return notFound();
};

export default Library;
