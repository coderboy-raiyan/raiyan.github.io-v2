import { client } from "client";
import { images } from "constants/index";
import Image from "next/image";
import React, { useState } from "react";
import { AppWrap, MotionWrap } from "Wrapper";
import styles from "./Footer.module.scss";

function Footer() {
    const [formData, setFormData] = useState({ username: "", email: "", message: "" });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const { username, email, message } = formData;

    const handleChangeInput = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        setLoading(true);

        const contact = {
            _type: "contact",
            name: formData.username,
            email: formData.email,
            message: formData.message,
        };

        client
            .create(contact)
            .then(() => {
                setLoading(false);
                setIsFormSubmitted(true);
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            <h2 className="head-text">
                Take a <span>coffee</span> & <span>chat</span> with me
            </h2>

            <div className={`${styles.app__footer_cards}`}>
                <div className={`${styles.app__footer_card}`}>
                    <Image width="40px" height="40px" src={images.email} alt="" />
                    <a href="mailto:tajkierhaque@gmail.com" className="p-text">
                        tajkierhaque@gmail.com
                    </a>
                </div>
                <div className={`${styles.app__footer_card}`}>
                    <Image width="40px" height="40px" src={images.mobile} alt="" />
                    <a href="tel: +880 (019) 0356-2123" className="p-text">
                        +880 190 356-2123
                    </a>
                </div>
            </div>

            {!isFormSubmitted ? (
                <div className={`${styles.app__footer_form} app__flex`}>
                    <div className="app__flex">
                        <input
                            type="text"
                            name="username"
                            value={username}
                            className="p-text"
                            placeholder="Your Name"
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div className="app__flex">
                        <input
                            className="p-text"
                            type="email"
                            placeholder="Your Email"
                            name="email"
                            value={email}
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div>
                        <textarea
                            className="p-text"
                            placeholder="Your Message"
                            value={message}
                            name="message"
                            onChange={handleChangeInput}
                        />
                    </div>
                    <button
                        disabled={loading}
                        type="button"
                        className="p-text"
                        onClick={handleSubmit}
                    >
                        {!loading ? "Send Message" : "Sending..."}
                    </button>
                </div>
            ) : (
                <div>
                    <h3 className="head-text">Thank you for getting in touch!</h3>
                </div>
            )}
        </>
    );
}

export default AppWrap(MotionWrap(Footer, "app__footer"), "contact", "app__whitebg");
