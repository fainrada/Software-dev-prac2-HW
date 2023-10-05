import Image from "next/image"

export default function HospitalDetailPage( {params} : { params: {hid:string}}){

    /**
     * Mock Data for Demonstration Only
     */
    const mockHospitalRepo = new Map()
    mockHospitalRepo.set("001",{hospitalName:"Chulalongkorn Hospital",cardSrc:"/img/chula.jpg"})
    mockHospitalRepo.set("002",{hospitalName:"Rajavithi Hospital",cardSrc:"/img/rajavithi.jpg"})
    mockHospitalRepo.set("003",{hospitalName:"Thammasat University Hospital",cardSrc:"/img/thammasat.jpg"})
    return(
        <main className="text-center p-5">
            <h1 className="text-lg font-medium text-black">Hospital ID : {params.hid}</h1>
            <div className="flex flex-row my-5">
                <Image src={ (mockHospitalRepo.get(params.hid)).cardSrc }
                    alt="Hospital Image"
                    width={0} height={0} sizes="100vw"
                    className="rounded-lg w-[30%]">
                </Image>
                <div className="text-md mx-5 text-black">{ (mockHospitalRepo.get(params.hid)).hospitalName}</div>
            </div>
        </main>
    )
}

export async function generateStaticParams() {
    return [{hid:'001'},{hid:'002'},{hid:'003'}]
}