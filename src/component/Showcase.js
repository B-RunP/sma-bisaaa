import Showcase2 from '../images/Showcase2.jpg';

function Showcase() {
    return(
        <section className="showcase">
        <div className="showcase-image">
            <img src={Showcase2} alt="Showcase2" />
        </div>
        <div class="showcase-text">
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo laboriosam harum, dignissimos minus neque
                praesentium odio aut omnis sed, aspernatur dolor. Sed laudantium vero velit explicabo, quibusdam minima
                cupiditate corporis.</p>
        </div>
    </section>
    )
}

export default Showcase
