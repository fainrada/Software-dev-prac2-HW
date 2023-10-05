"use client"
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"

export default function VaccineDatePicker() {
    return(
        <form className="w-2/4 space-y-3">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker/>
            </LocalizationProvider>
        </form>
                    
    )
}