import styles from './card.module.css'
import Image from 'next/image'

export default function Card() {
    return (
        <div className={styles.card}>
            <div className={styles.cardimg}>
                <Image src={'/img/virus.jpg'}
                style={{borderRadius: "10px 10px 0px 0px"}} 
                alt='Card'
                fill={true}
                objectFit ='cover'/>
            </div>
            <div className={styles.cardtext}>วัคซีน (Vaccine) คือสารชนิดหนึ่งที่ฉีดเข้าไปร่างกาย เพื่อสร้างภูมิคุ้มกันโรคต่างๆ</div>
        </div>
    );
}