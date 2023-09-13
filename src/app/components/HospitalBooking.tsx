import {Select, MenuItem } from '@mui/material';

export default function HospitalBooking(){
    return(
        <form className="w-2/4 space-y-3">
            <Select variant='standard' name="hospital" id="hospital" 
            className='w-2/4 h-[2em]'>
                <MenuItem value="hospital1">Chulalongkorn Hospital</MenuItem>
                <MenuItem value="hospital2">Rajavithi Hospital</MenuItem>
                <MenuItem value="hospital3">Thammasat University Hospital</MenuItem>
            </Select>
        </form>

    )
}