import React from 'react';
import Jumbotron from "../component/Jumbotron";
import Showcase from '../component/Showcase';
import ContentHome from '../component/ContentHome';
import Footer from '../component/Footer';

function HomePage() {
    return(
        <React.Fragment>
            <Jumbotron />
            <Showcase />
            <ContentHome />
            <Footer />
        </React.Fragment>
    )
}

export default HomePage;
