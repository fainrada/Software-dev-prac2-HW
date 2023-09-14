'use client'
import {useReducer} from 'react'
import Card from "./Card";

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

  return (
    <div className= "w-full">
      <div style={{margin:'20px', display:'flex',flexDirection:'row', alignContent:'space-around',justifyContent:'space-around',flexWrap:'wrap',padding:'10px'}}>
        <Card cardSrc="/img/chula.jpg" cardName="Chulalongkorn Hospital"
                     score={ratingList.has('Chulalongkorn Hospital') ? ratingList.get('Chulalongkorn Hospital')! : 0}
                     onRating={(hospitalName:string, score:number) => dispatchRating({type:'add', hospitalName:hospitalName, score:score })}/>
        <Card cardSrc="/img/rajavithi.jpg" cardName="Rajavithi Hospital"
                     score={ratingList.has('Rajavithi Hospital') ? ratingList.get('Rajavithi Hospital')! : 0}
                     onRating={(hospitalName:string, score:number) => dispatchRating({type:'add', hospitalName:hospitalName, score:score })}/>
        <Card cardSrc="/img/thammasat.jpg" cardName="Thammasat University Hospital"
                     score={ratingList.has('Thammasat University Hospital') ? ratingList.get('Thammasat University Hospital')! : 0}
                     onRating={(hospitalName:string, score:number) => dispatchRating({type:'add', hospitalName:hospitalName, score:score })}/>
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