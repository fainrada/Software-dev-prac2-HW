import styles from './banner.module.css'
import Image from 'next/image'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <Image src={'/img/vaccine.jpg'} 
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
