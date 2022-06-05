import { client } from "client";
import { Navbar } from "components";
import { About, Footer, Header, Skills, Testimonials, Work } from "container";
import React from "react";

function index({
    abouts,
    skills,
    works,
    experiences,
}: {
    abouts: any;
    skills: any;
    works: any;
    experiences: any;
}) {
    console.log(abouts, skills, works);
    return (
        <div className="app">
            <Navbar />
            <Header />
            <About abouts={abouts} />
            <Work works={works} />
            <Skills skills={skills} experiences={experiences} />
            <Testimonials />
            <Footer />
        </div>
    );
}

export async function getServerSideProps(): Promise<any> {
    const aboutQuery = '*[_type == "abouts"]';
    const skillsQuery = '*[_type == "skills"]';
    const worksQuery = '*[_type == "works"]';
    const experiencesOuery = '*[_type == "experiences"]';
    const abouts = await client.fetch(aboutQuery);
    const skills = await client.fetch(skillsQuery);
    const works = await client.fetch(worksQuery);
    const experiences = await client.fetch(experiencesOuery);
    return { props: { abouts, skills, works, experiences } };
}

export default index;
