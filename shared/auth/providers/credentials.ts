import axios from "axios";
import Credentials from "next-auth/providers/credentials";

export default Credentials({
  credentials: {
    email: { label: "Email", type: "email" },
    password: { label: "Password", type: "password" },
  },
  async authorize(credentials) {
    if (!credentials?.email || !credentials?.password) {
      return null;
    }

    try {
      let res = await axios.post(
        `${process.env.BASE_URL}/api/users`,
        { email: credentials.email, password: credentials.password },
        { headers: { "Content-Type": "application/json" } }
      );

      const user = res.data;

      if (!user.ok || !user.id) {
        throw new Error(user.message || "Authentication failed");
      }

      return { id: user.id, email: user.email, name: user.username };
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data?.message) {
        throw new Error(error.response.data.message);
      }

      throw error;
    }
  },
});
