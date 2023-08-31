import Image from 'next/image'
import styles from './page.module.css'
import Banner from './components/Banner'
import Card from './components/Card'

export default function Home() {
  return (
    <main>
      <Banner/>
      <div className='flex flex-row m-10 gap-8 '>
        <Card cardSrc="/img/chula.jpg" cardName="Chulalongkorn Hospital"/>
        <Card cardSrc="/img/rajavithi.jpg" cardName="Rajavithi Hospital"/>
        <Card cardSrc="/img/thammasat.jpg" cardName="Thammasat University Hospital"/>
      </div>
    </main>
  )
}
