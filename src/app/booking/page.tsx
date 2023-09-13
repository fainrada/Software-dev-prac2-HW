import HospitalBooking from "../components/HospitalBooking";
import VaccineDatePicker from "../components/VaccineDatePicker";

export default function Booking(){
    return(
        <main>
            <div className="flex flex-col m-10 gap-2 text-black">
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