'use client'
import { useState } from 'react'
import styles from './banner.module.css'
import Image from 'next/image'

export default function Banner() {
    const covers = ['/img/vaccine.jpg', '/img/banner2.jpg', '/img/banner3.jpg', '/img/banner4.jpg']
    const [index,setIndex] = useState(0)
    return (
        <div className={styles.banner} onClick={()=>{setIndex(index+1)}}>
            <Image src={covers[index%3]} 
            alt='banner'
            fill={true}
            objectFit ='cover'/>
            <div className={styles.bannerText}>
                <h1 className='text-3xl font-medium'>ประชาสัมพันธ์การให้บริการฉีดวัคชีน</h1>
                <h3 className='text-xl'>ไข้หวัดใหญ่สายพันธ์ A ประจำปี</h3>
            </div>
        </div>
    )
}
