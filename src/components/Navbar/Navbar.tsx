import { images } from "constants/index";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import styles from "./Navbar.module.scss";

function Navbar() {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className={styles.app__navbar}>
            <div className={styles.app__navbar_logo}>
                <Image src={images.logo} />
            </div>
            <ul className={styles.app__navbar_links}>
                {["home", "about", "work", "Testimonial", "skills", "contact"].map((item) => (
                    <li className="app__flex p-text" key={item}>
                        <div />
                        <a href={`#${item.toLowerCase()}`}>{item}</a>
                    </li>
                ))}
            </ul>

            {/* mobile menu */}
            <div className={styles.app__navbar_menu}>
                <HiMenuAlt4 onClick={() => setToggle(true)} />

                {toggle && (
                    <motion.div
                        whileInView={{ x: [300, 0] }}
                        transition={{ duration: 0.85, ease: "easeOut" }}
                    >
                        <HiX onClick={() => setToggle(false)} />
                        <ul>
                            {["home", "about", "work", "skills", "contact"].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        onClick={() => setToggle(false)}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
