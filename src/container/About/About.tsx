/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-array-index-key */

import { urlFor } from "client";
import { motion } from "framer-motion";
import React from "react";
import styles from "./About.module.scss";

// const abouts = [
//     {
//         title: "Web Development",
//         description: "I am a good web developer",
//         imgUrl: images.about01,
//     },
//     {
//         title: "Backend Development",
//         description: "I am a good web developer",
//         imgUrl: images.about02,
//     },
//     {
//         title: "Full stack development",
//         description: "I am a good web developer",
//         imgUrl: images.about03,
//     },
//     {
//         title: "React Development",
//         description: "I am a good web developer",
//         imgUrl: images.about04,
//     },
// ];

function About({ abouts }: { abouts: any }) {
    return (
        <>
            <h2 className="head-text">
                I know that <span>Good Development</span> <br /> means <span>Good business</span>
            </h2>

            <div className={`${styles.app__profiles}`}>
                {abouts.map((about: any, i: any) => (
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: "tween" }}
                        className={`${styles.app__profile_item}`}
                        key={i}
                    >
                        <img src={`${urlFor(about.imgUrl)}`} alt="" />
                        <h2 className={` bold-text`} style={{ marginTop: 20 }}>
                            {about.title}
                        </h2>
                        <p className={` p-text`} style={{ marginTop: 10 }}>
                            {about.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </>
    );
}

export default About;
