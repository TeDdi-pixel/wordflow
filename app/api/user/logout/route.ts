import { logout } from "@/shared/model/session";
import type { NextApiRequest, NextApiResponse } from "next";

export async function POST(request: NextApiRequest, res: NextApiResponse) {
  try {
    await logout();
    return res.status(200).json({ message: "Logged out" });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
