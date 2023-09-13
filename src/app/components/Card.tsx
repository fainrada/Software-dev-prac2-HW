import Image from 'next/image'
import InteractiveCard from './InteractiveCard'

export default function Card({cardSrc, cardName}:{cardSrc:string, cardName:string}) {
    return (
        <InteractiveCard contentName={cardName}>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src={cardSrc} alt='hospital picture' fill={true} className='rounded-t-lg'/>
            </div>
            <div className='w-full h-[30%] p-[10px] text-black'>{cardName}</div>
        </InteractiveCard>
    );
}