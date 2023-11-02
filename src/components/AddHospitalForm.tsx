import { dbConnect } from "@/db/dbConnect";
import HospitalModel from '@/db/models/Hospital'
import { revalidatePath } from "next/cache";

export default function AddHospitalForm() {
    const addHospital = async (addHospitalForm:FormData) => {
      "use server"  

      const name = addHospitalForm.get("name")
      const address = addHospitalForm.get("address")
      const district = addHospitalForm.get("district")
      const province = addHospitalForm.get("province")
      const postalcode = addHospitalForm.get("postalcode")
      const tel = addHospitalForm.get("tel")
      const picture = addHospitalForm.get("picture")
      try {
          await dbConnect()
          const hospitalObject = {
              "name": name,
              "address": address,
              "district": district,
              "province": province,
              "postalcode": postalcode,
              "tel": tel,
              "picture": picture,
          }
          const hospital = await HospitalModel.create(hospitalObject)
      }
      catch(error){
          console.log(error)
      }
      revalidatePath('/hospital')
  }
  return(
    <div className="shadow-xl shadow-xl m-5 p-5 text-black text-left">
    <form action={addHospital}>
        <div className='text-xl text-black'>Add hospital</div>
        <div className='flex items-center w-1/2 my-2'>
          <label className="w-autp block text-grey-700 pr-4">name</label>
          <input type='text' required name='name' id='name' placeholder="hospital name"
            className="bg-white border-2 border-gray-200 rounded w-full p-2
            text-gray-700 focus:outline-none focus:border-blue-400"></input>
        </div>
        <div className='flex items-center w-1/2 my-2'>
          <label className="w-autp block text-grey-700 pr-4">address</label>
          <input type='text' required name='address' id='address' placeholder="address"
            className="bg-white border-2 border-gray-200 rounded w-full p-2
            text-gray-700 focus:outline-none focus:border-blue-400"></input>
        </div>
        <div className='flex items-center w-1/2 my-2'>
          <label className="w-autp block text-grey-700 pr-4">district</label>
          <input type='text' required name='district' id='district' placeholder="district"
            className="bg-white border-2 border-gray-200 rounded w-full p-2
            text-gray-700 focus:outline-none focus:border-blue-400"></input>
        </div>
        <div className='flex items-center w-1/2 my-2'>
          <label className="w-autp block text-grey-700 pr-4">province</label>
          <input type='text' required name='province' id='province' placeholder="province"
            className="bg-white border-2 border-gray-200 rounded w-full p-2
            text-gray-700 focus:outline-none focus:border-blue-400"></input>
        </div>
        <div className='flex items-center w-1/2 my-2'>
          <label className="w-autp block text-grey-700 pr-4">postalcode</label>
          <input type='text' required name='postalcode' id='postalcode' placeholder="postalcode"
            className="bg-white border-2 border-gray-200 rounded w-full p-2
            text-gray-700 focus:outline-none focus:border-blue-400"></input>
        </div>
        <div className='flex items-center w-1/2 my-2'>
          <label className="w-autp block text-grey-700 pr-4">tel</label>
          <input type='text' required name='tel' id='tel' placeholder="telephone number"
            className="bg-white border-2 border-gray-200 rounded w-full p-2
            text-gray-700 focus:outline-none focus:border-blue-400"></input>
        </div>
        <div className='flex items-center w-1/2 my-2'>
          <label className="w-autp block text-grey-700 pr-4">picture</label>
          <input type='text' required name='picture' id='picture' placeholder="URL"
            className="bg-white border-2 border-gray-200 rounded w-full p-2
            text-gray-700 focus:outline-none focus:border-blue-400"></input>
        </div>
        <button type="submit" className="bg-blue-500 rounded-lg hover:bg-blue-700 text-white p-2">Add New Hospital</button>
      </form>
    </div>
  )
}