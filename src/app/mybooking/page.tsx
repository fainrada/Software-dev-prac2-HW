"use client"
import { useAppSelector } from "@/redux/store"
import { useDispatch } from "react-redux"
import { removeVaccineBook } from "@/redux/features/bookSlice"
export default function mybooking(){

    const hospitalItems = useAppSelector( (state)=> state.bookSlice.hospitalItems)
    const dispatch = useDispatch()
    return (
        <main className="p-5 space-y-2">
            <h1 className="text-xl font-medium text-black">my booking</h1>
            {
                hospitalItems.length != 0 ? (
                hospitalItems.map((bookingItem)=>(
                    <div className="rounded px-5 mx-5 py-2 my-2 space-y-2"
                        key={bookingItem.hospitalName}>
                            <div className="text-xl text-black">{bookingItem.hospitalName}</div>
                            <div className="text-sm text-black">Name: {bookingItem.name}</div>
                            <div className="text-sm text-black">Surname: {bookingItem.surname}</div>
                            <div className="text-sm text-black">ID: {bookingItem.citizenId}</div>
                            <div className="text-md text-black">Booking Date: {bookingItem.bookingDate}</div>
                            <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
                            onClick={() => dispatch(removeVaccineBook(bookingItem))}>Remove Booking</button>
                    </div>
                ))
                ) :
                <div>
                    <div className="text-lg text-gray-400">No Vaccine Booking</div>
                </div>
            }
        </main>
    )
}