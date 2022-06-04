import { motion } from "framer-motion";
import React from "react";
import styles from "./Header.module.scss";

function Header() {
    return (
        <div className={`${styles.app__header} ${styles.app__flex}`}>
            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className={`${styles.app__header_info}`}
            >
                <div className={`${styles.app___header_badge}`}>
                    <div className={`${styles.badge_cmp} app__flex`}>
                        <span>👋</span>
                        <div style={{ marginLeft: 20 }}>
                            <p className="p-text">Hello, I am</p>
                            <h1 className="head-text">Raiyan</h1>
                        </div>
                    </div>
                </div>

                <div className={`${styles.tag_cmp} app__flex`}>
                    <p className="p-text">Web Developer</p>
                    <p className="p-text">Freelancer</p>
                </div>
            </motion.div>
        </div>
    );
}

export default Header;
