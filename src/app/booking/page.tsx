import HospitalBooking from "../../components/HospitalBooking";
import VaccineDatePicker from "../../components/VaccineDatePicker";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";

export default async function Booking() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;

  const profile = await getUserProfile(session.user.token);
  var createdAt = new Date(profile.data.createdAt);
    return(
        <main>
            <div className="flex flex-col m-10 gap-2 text-black">
            <div className="bg-slate-100 m-5 p-5 text-black">
                <div className="text-2xl">{profile.data.name}</div>
                    <table className="table-auto border-separate border-spacing-2">
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
                <div className="text-xl">reservation</div>
                <div>ชื่อและนามสกุล</div>
                <input type="text" placeholder="Your name"
                className="w-1/4 rounded ring-1 ring-inset ring-gray-400 text-md leading-6 
                indent-2 placeholder:text-gray-400 focus:outline-none focus:ring-blue-400"/>
                <div>เลขบัตรประจำตัวประชาชน</div>
                <input type="text" placeholder="national ID"
                className="w-1/4 rounded ring-1 ring-inset ring-gray-400 text-md leading-6 
                indent-2 placeholder:text-gray-400 focus:outline-none focus:ring-blue-400"/>
                <div>โรงพยาบาลที่ต้องการรับวัคซีน</div>
                <HospitalBooking/>
                <div>วันที่ต้องการรับวัคซีน</div>
                <VaccineDatePicker/>
            </div>
        </main>
    )
}