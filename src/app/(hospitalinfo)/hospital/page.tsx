import getHospitals from "@/libs/getHospitals";
import HospitalCatalog from "@/components/HospitalCatalog";
import { Suspense } from "react"
import { LinearProgress } from "@mui/material";

export default function Hospital() {
    const hospitals = getHospitals();
    return (
        <main className="text-center p-5">
            <h1 className="text-xl font-medium text-black">Select Your hospital</h1>
            <Suspense fallback={ <p>Loading ... <LinearProgress/></p>}>
                <HospitalCatalog hospitalJson={hospitals}/>
            </Suspense>
        </main>
    )
}

