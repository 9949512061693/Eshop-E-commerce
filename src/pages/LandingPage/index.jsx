import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import Categories from '../../components/Categories'
import Services from '../../components/Services'
import Banner from '../../components/Banner'
import LandingPageProducts from '../../components/LandingPageProducts'
import LandingPageBlogs from '../../components/LandingPageBlogs'
import LandingPageParteners from '../../components/LandingPageParteners'
import Footer from '../../components/Footer'

import smartwatch from '../../assets/category/smartwatch.png'
import BannerImg from '../../assets/bannerImage/BannerImg.png'

const BannerData = {
    discount: '30% OFF',
    title: 'Fine Smile',
    date: '10 Jan to 28 Jan',
    image: BannerImg,
    title2: 'Air Solo Bass',
    title3: 'Winter Sale',
    description: 'Experience powerful bass, sleek design, and all-day comfort in one.',
    bgColor: '#f42c37',

}

const BannerData2 = {
    discount: '30% OFF',
    title: 'Happy Hours',
    date: '14 Jan to 28 Jan',
    image: smartwatch,
    title2: 'Smart Solo',
    title3: 'Winter Sale',
    description: 'Experience powerful bass, sleek design, and all-day comfort in one.',
    bgColor: '#2dcc6f'
}

function LandingPage() {
    return (
        <>
            <Navbar />
            <Hero />
            <Categories />
            <Services />
            <Banner data={BannerData} />
            <LandingPageProducts />
            <Banner data={BannerData2} />
            <LandingPageBlogs />
            <LandingPageParteners />
            <Footer />
        </>
    )
}

export default LandingPage
