import Calendar from './Calendar.js'
import Header from './Header.js'
import Footer from './Footer.js'

export default function HomePage(){
    return(
        <main>
            <Header/>
            <section id="calendario">
                <Calendar />
            </section>
            <Footer/>
        </main>
    )
}