import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";



export default async function UserProfileCard() {
    const session = await getServerSession(authOptions);
    if (!session || !session.user.token) return null;

    const profile = await getUserProfile(session.user.token);
    var createdAt = new Date(profile.data.createdAt);

    return (
        <div className="shadow-xl shadow-md m-5 p-5 text-black text-left">
        <div className="text-xl">{profile.data.name}</div>
        <table className="table-auto border-separate border-spacing-1">
          <tbody>
            <tr>
              <td>Email</td>
              <td>{profile.data.email}</td>
            </tr>
            <tr>
              <td>Tel</td>
              <td>{profile.data.tel}</td>
            </tr>
            <tr>
              <td>Member Since</td>
              <td>{createdAt.toString()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}