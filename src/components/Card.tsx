import Image from 'next/image'
import InteractiveCard from './InteractiveCard'
import { Typography } from '@mui/material';
import { Rating } from '@mui/material';

export default function Card({hospitalName, cardSrc, onRating,score}:{hospitalName:string,cardSrc:string, onRating?:Function,score:number}) {
    return (
        <InteractiveCard contentName={hospitalName}>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src={cardSrc} alt='hospital picture' fill={true} className='rounded-t-lg'/>
            </div>
            <div className='w-full h-[20%] p-[10px] text-black'>{hospitalName}</div>
            {
                onRating ? <Rating value={score}  
                onClick={(e) => {
                e.stopPropagation();
                }}
                onChange={(e,v)=>{
                onRating(hospitalName, v);
                }}/> : <></>
            }
        </InteractiveCard>
    );
}