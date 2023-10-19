import styles from './topmenu.module.css'
import Image from 'next/image';
import TopMenuItem from './TopMenuItem';
import {getServerSession} from "next-auth";
import Link from "next/link";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

export default async function Topmenu(){
    const session = await getServerSession(authOptions);
    return(
        <div className={styles.menucontainer}>
            <Image src={'/img/logo.png'} className={styles.logoimg} alt='logo' width={0} height={0} sizes='100vh'></Image>
            <TopMenuItem title='Booking' pageRef='/booking'/>
            { session?
                <Link href="/api/auth/signout">
                    <div className="flex text-black absolute left-0 h-full px-3 items-center justify-center text-center text-sm">Sign-Out</div>
                </Link>:
                <Link href="/api/auth/signin">
                    <div className="flex text-black absolute left-0 h-full px-3 items-center justify-center text-center text-sm">Sign-In</div>
                </Link>
            }
        </div>
    );
}