"use client"
import { Input } from "@mui/material";
import HospitalDateBooking from "../../components/HospitalDateBooking";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Dayjs } from "dayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { BookingItem } from "../../../interface";
import { addVaccineBook } from "@/redux/features/bookSlice";

export default function Booking() {
    const urlParams = useSearchParams()
  const hid = urlParams.get('id')
  const hospitalName = urlParams.get('hospitalName')

  const dispatch = useDispatch<AppDispatch>()

  const bookVaccine = () => {
    if(hospitalname && bookingDate){
      const item:BookingItem = {
        name: name,
        surname: surname,
        citizenId: citizenId,
        hospitalName: hospitalname,
        bookingDate: String(bookingDate)
      }
      dispatch(addVaccineBook(item))
    }
  }

  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [citizenId, setCitizenId] = useState("")
  const [bookingDate, setBookingDate] = useState<Dayjs|null>(null)
  const [hospitalname, setHospitalName] = useState("Chulalongkorn Hospital")
    return(
        <main>
            <div className="flex flex-col m-10 gap-2 text-black">
                <div className="my-10">
                    <div className="text-xl text-center font-medium text-gray-600">Make new booking</div>
                </div>
                <div className="w-fit space-y-2 flet items-center">
                    <div className="text-md text-left text-gray-600">ชื่อ และ นามสกุล</div>
                    <div className="rounded-lg space-x-5 space-y-2 w-[100%] px-10 py-5">
                        <Input placeholder="name" value={name} onChange={(e) => {setName(e.target.value)}}/>
                        <Input placeholder="surname" value={surname} onChange={(e) => {setSurname(e.target.value)}}/>
                    </div>
                    <div className="text-md text-left text-gray-600">รหัสประจำตัวประชาชน</div>
                    <div className="rounded-lg space-x-5 space-y-2 w-[100%] px-10 py-5">
                        <Input placeholder="id card number" value={citizenId} onChange={(e) => {setCitizenId(e.target.value)}}/>
                    </div>
                </div>
                <div className="text-md text-left text-gray-600">โรงพยาบาลและวันที่ต้องการรับวัคซีน</div>
                <HospitalDateBooking onDateChange={(value:Dayjs)=>{setBookingDate(value)}}
                onLocationChange={(value:string)=>{setHospitalName(value)}}/>
                <div>
                    <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm" onClick={bookVaccine}>
                    Book the Vaccine</button>
                </div>
            </div>
        </main>
    )
}