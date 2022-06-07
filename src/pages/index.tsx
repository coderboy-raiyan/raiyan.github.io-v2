import { client } from "client";
import { Navbar } from "components";
import { About, Footer, Header, Skills, Testimonials, Work } from "container";
import Head from "next/head";
import React from "react";

function index({
    abouts,
    skills,
    works,
    experiences,
    testimonials,
}: {
    abouts: any;
    skills: any;
    works: any;
    experiences: any;
    testimonials: any;
}) {
    return (
        <>
            <Head>
                <title>Raiyan | MERN Stack Dev</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="app">
                <Navbar />
                <Header />
                <About abouts={abouts} />
                <Work works={works} />
                <Skills skills={skills} experiences={experiences} />
                <Testimonials testimonials={testimonials} />
                <Footer />
            </div>
        </>
    );
}

export async function getServerSideProps(): Promise<any> {
    const aboutQuery = '*[_type == "abouts"]';
    const skillsQuery = '*[_type == "skills"]';
    const worksQuery = '*[_type == "works"]';
    const experiencesOuery = '*[_type == "experiences"]';
    const testimonialsQuery = '*[_type == "testimonials"]';

    const abouts = await client.fetch(aboutQuery);
    const skills = await client.fetch(skillsQuery);
    const works = await client.fetch(worksQuery);
    const experiences = await client.fetch(experiencesOuery);
    const testimonials = await client.fetch(testimonialsQuery);
    return { props: { abouts, skills, works, experiences, testimonials } };
}

export default index;
