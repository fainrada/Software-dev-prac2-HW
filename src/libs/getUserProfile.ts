export default async function getUserProfile(token: string) {
  const res = await fetch("http://localhost:5000/api/v1/auth/me", {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    throw new Error("Cannot get user profile");
  }
  return res.json();
}
