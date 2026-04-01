import Calendar from './Calendar.js'
import Header from './Header.js'
import Footer from './Footer.js'
import './HomePage.css'

export default function HomePage(){
    return(
        <main id='homePageBody'>
            <Header/>
            <section id="calendario">
                <Calendar />
            </section>
            <Footer/>
        </main>
    )
}