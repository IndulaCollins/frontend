import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Headsection from '@/components/Headsection'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import NewsEvents from '@/components/NewsEvents'
import Quicklinks from '@/components/Quicklinks'
export default function Home() {
      return (
        <>
        <Navbar/>
        <HeroSection/>
        <Quicklinks/>
        <NewsEvents/>
        <Headsection/>
        <Footer/>
        </>
      )
    }
