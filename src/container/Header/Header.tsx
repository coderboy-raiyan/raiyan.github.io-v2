/* eslint-disable react/no-array-index-key */
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { AppWrap } from "Wrapper";
import { images } from "../../constants";
import styles from "./Header.module.scss";

const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: "easeInOut",
        },
    },
};

function Header() {
    return (
        <div className={`${styles.app__header}  app__flex`}>
            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className={`${styles.app__header_info}`}
            >
                <div className={`${styles.app__header_badge}`}>
                    <div className={`${styles.badge_cmp} app__flex`}>
                        <span>👋</span>
                        <div style={{ marginLeft: 20 }}>
                            <p className="p-text">Hello, I am</p>
                            <h1 className="head-text">Raiyan</h1>
                        </div>
                    </div>

                    <div className={`${styles.tag_cmp} app__flex`}>
                        <p className="p-text">Passionate Web Developer</p>
                        <p className="p-text">Self-taught Dev</p>
                    </div>
                </div>
            </motion.div>

            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className={`${styles.app__header_img}`}
            >
                <Image src={images.profile} alt="profile_bg" />

                <motion.div
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className={`${styles.overlay_circle}`}
                >
                    <Image src={images.circle} />
                </motion.div>
            </motion.div>

            <motion.div
                variants={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className={`${styles.app__header_circles}`}
            >
                {[images.react, images.redux, images.next].map((circle, index) => (
                    <div className={`${styles.circle_cmp} app__flex`} key={`circle-${index}`}>
                        <Image src={circle} alt="profile_bg" />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

export default AppWrap(Header, "home");
