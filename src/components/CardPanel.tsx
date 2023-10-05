'use client'
import {useReducer} from 'react'
import Card from "./Card";
import Link from 'next/link';

export default function CardPanel() {
  const ratingReducer = (ratingList:Map<string,number>, action:{type:string, hospitalName:string, score:number})=>{
    switch(action.type) {
      case 'add' : {
        return new Map(ratingList.set(action.hospitalName,action.score))
      }
      case 'remove' : {
        ratingList.delete(action.hospitalName)
        return new Map(ratingList)
      }
      default : return ratingList
    }
  }

  const [ratingList, dispatchRating] = useReducer(ratingReducer, new Map<string,number>())

  /**
   * Mock Data for Demontration Only
   */
  const mockHospitalRepo = [
    {hid: "001",hospitalName:"Chulalongkorn Hospital",cardSrc:"/img/chula.jpg"},
    {hid: "002",hospitalName:"Rajavithi Hospital",cardSrc:"/img/rajavithi.jpg"},
    {hid: "003",hospitalName:"Thammasat University Hospital",cardSrc:"/img/thammasat.jpg"},
  ]

  return (
    <div className= "w-full">
      <div style={{margin:'20px', display:'flex',flexDirection:'row', alignContent:'space-around',justifyContent:'space-around',flexWrap:'wrap',padding:'10px'}}>
      {
          mockHospitalRepo.map((hospitalItem)=>(
             <Link href={`/hospital/${hospitalItem.hid}`} className='w-1/5'>
              <Card hospitalName={hospitalItem.hospitalName} cardSrc={hospitalItem.cardSrc}
                          score={ratingList.has(hospitalItem.hospitalName) ? ratingList.get(hospitalItem.hospitalName)! : 0}
                          onRating={(hospitalName:string, score:number) => 
                            dispatchRating({type:'add', hospitalName:hospitalName, score:score })}/>
             </Link>
          ))
        }
    </div>
      {Array.from(ratingList).map(([hospitalName, score]) => (
        <div className= "m-2 text-black" key={hospitalName}
             onClick={()=>dispatchRating({type:'remove', hospitalName:hospitalName, score:score})}>
          {hospitalName} Rating = {score}
        </div>
      ))}
    </div>
  )
}