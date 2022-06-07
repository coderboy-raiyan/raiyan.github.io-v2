/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-array-index-key */
import { motion } from "framer-motion";
import React from "react";
import { AppWrap, MotionWrap } from "Wrapper/index";
// import { AppWrap,  } from 'Wrapper/index';
import { urlFor } from "../../client";
import styles from "./Skills.module.scss";

function Skills({ skills, experiences }: { skills: any; experiences: any }) {
    return (
        <>
            <h2 className="head-text">
                Skills, Experience & <span>Certifications</span>
            </h2>

            <div className={`${styles.app__skills_container}`}>
                <motion.div className={`${styles.app__skills_list}`}>
                    {skills?.map((skill: any, index: any) => (
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className={`${styles.app__skills_item} app__flex`}
                            key={index}
                        >
                            <div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
                                <img src={`${urlFor(skill.icon)}`} alt="" />
                            </div>

                            <p className="p-text">{skill.name}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div className={`${styles.app__skills_exp}`}>
                    {experiences.map((experience: any, index: any) => (
                        <motion.div className={`${styles.app__skills_exp_item}`} key={index}>
                            <div className={`${styles.app__skills_exp_year}`}>
                                <p className="bold-text">{experience.year}</p>
                            </div>

                            <motion.div className={`${styles.app__skills_exp_works}`}>
                                {experience.works.map((work: any) => (
                                    <motion.div
                                        whileInView={{ opacity: [0, 1] }}
                                        transition={{ duration: 0.5 }}
                                        key={index}
                                        className={`${styles.app__skills_exp_work}`}
                                    >
                                        <h4 className="bold-text">{work.name}</h4>
                                        <a
                                            href={`${work.certification}`}
                                            target="_blank"
                                            className="p-text"
                                        >
                                            {work.company}
                                        </a>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </>
    );
}

export default AppWrap(MotionWrap(Skills, `${styles.app__skills}`), "skills", "app__whitebg");
