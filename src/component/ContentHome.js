import Galery1 from '../images/Galery1.jpg';
import Galery2 from '../images/Galery2.jpg';
import Galery3 from '../images/Galery3.jpg';
import Galery4 from '../images/Galery4.jpg';

function ContentHome() {
    return(
        <div className="home-container">
            <header>
                <h1>Terbesar di Indonesia</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, vitae!</p>
            </header>
            <section>
                <img src={Galery1} alt='Galery1' />
                <img src={Galery2} alt='Galery2' />
                <img src={Galery3} alt='Galery3' />
                <img src={Galery4} alt='Galery4' />
            </section>
        </div>
    )
}

export default ContentHome;
