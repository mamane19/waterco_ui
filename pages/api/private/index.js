import { getSession } from "next-auth/client";

// Prevents users from accessing some pages when the session is expired or inexistent.

export default async (req, res) => {
  const session = await getSession({ req });
  if (session) res.send({ isSigned: true });
  else res.send({ isSigned: false });
};
