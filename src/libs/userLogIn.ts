import { POST } from "@/app/api/auth/[...nextauth]/route";

export default async function userLogIn(
  userEmail: string,
  userPassword: string
) {
  const res = await fetch("http://localhost:5000/api/v1/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: userEmail,
      password: userPassword,
    }),
  });
  console.log(res);
  if (!res.ok) {
    throw new Error("Failed to log-in");
  }
  return await res.json();
}
