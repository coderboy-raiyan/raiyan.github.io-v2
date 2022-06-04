import { client } from "client";
import { Navbar } from "components";
import { About, Footer, Header, Skills, Testimonials, Work } from "container";
import React from "react";

function index({ abouts, skills }: { abouts: any; skills: any }) {
    console.log(abouts, skills);
    return (
        <div className="app">
            <Navbar />
            <Header />
            <About abouts={abouts} />
            <Work />
            <Skills />
            <Testimonials />
            <Footer />
        </div>
    );
}

export async function getServerSideProps(): Promise<any> {
    const aboutQuery = '*[_type == "abouts"]';
    const skillsQuery = '*[_type == "skills"]';
    const abouts = await client.fetch(aboutQuery);
    const skills = await client.fetch(skillsQuery);
    return { props: { abouts, skills } };
}

export default index;
