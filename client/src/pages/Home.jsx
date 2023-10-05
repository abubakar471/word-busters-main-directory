import Navbar from "../components/navbar/navbar"
import HomePageHeader from "../components/header/HomePageHeader.jsx"
import About from "../components/about/About"
import Footer from "../components/footer/Footer"
const Home =() => {
    return(
        <div>
            <Navbar active={1} />
            <HomePageHeader />
            <About />
            <Footer />
        </div>
    )
}

export default Home