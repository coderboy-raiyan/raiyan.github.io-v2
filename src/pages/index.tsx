import { Navbar } from "components";
import { About, Footer, Header, Skills, Testimonials, Work } from "container";
import React from "react";

function index() {
    return (
        <div>
            <Navbar />
            <Header />
            <About />
            <Work />
            <Skills />
            <Testimonials />
            <Footer />
        </div>
    );
}

export default index;
