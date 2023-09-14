import Image from 'next/image'
import InteractiveCard from './InteractiveCard'
import { Typography } from '@mui/material';
import { Rating } from '@mui/material';

export default function Card({cardSrc, cardName,onRating,score}:{cardSrc:string, cardName:string,onRating:Function,score:number}) {
    return (
        <InteractiveCard contentName={cardName}>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src={cardSrc} alt='hospital picture' fill={true} className='rounded-t-lg'/>
            </div>
            <div className='w-full h-[20%] p-[10px] text-black'>{cardName}</div>
            <Rating className='w-full h-[10%]' value={score} onChange={(e,v)=>onRating(cardName,v)}/>
        </InteractiveCard>
        
    );
}