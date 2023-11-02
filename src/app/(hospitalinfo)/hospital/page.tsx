import getHospitals from "@/libs/getHospitals";
import HospitalCatalog from "@/components/HospitalCatalog";
import { Suspense } from "react"
import { LinearProgress } from "@mui/material";

import UserProfileCard from "@/components/UserProfileCard";
import AddHospitalForm from "@/components/AddHospitalForm";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import getUserProfile from "@/libs/getUserProfile";

export default async function Hospital() {
    const hospitals = getHospitals();
    const session = await getServerSession(authOptions);
    if (!session || !session.user.token) return null;
    const profile = await getUserProfile(session.user.token);
    return (
        <main className="text-center p-5">
            <h1 className="text-xl font-medium text-black">Select Your hospital</h1>
            <Suspense fallback={ <p>Loading ... <LinearProgress/></p>}>
                <HospitalCatalog hospitalJson={hospitals}/>
            </Suspense>
            <UserProfileCard/>
            {
                (profile.data.role == "admin")?
                <AddHospitalForm/>
                : <></>
            } 
        </main>
    )
}

