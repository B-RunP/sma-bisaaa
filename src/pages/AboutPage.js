import Brian from '../images/Brian.jpg';

function AboutPage() {
    return(
        <div className="about">
            <div className="card-profile__about">
                <img src={Brian} alt="John" />
                <h1>Brian Purnama Putra</h1>
                <p className="university-name">Universitas Duta Bangsa Surakarta</p>
                <p>Harvard University</p>
                <p><button className="card-button__about">Contact</button></p>
            </div>
        </div>
    )
}

export default AboutPage;
