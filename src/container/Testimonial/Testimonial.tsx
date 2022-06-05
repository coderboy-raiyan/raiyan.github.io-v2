/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-useless-fragment */
import { urlFor } from "client";
import React, { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { AppWrap, MotionWrap } from "Wrapper";
import styles from "./Testimonial.module.scss";

function Testimonial({ testimonials }: { testimonials: any }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClick = (index: any) => {
        setCurrentIndex(index);
    };

    return (
        <>
            {testimonials.length && (
                <>
                    <div className={`${styles.app__testimonial_item} app__flex`}>
                        <img src={`${urlFor(testimonials[currentIndex]?.imgurl)}`} alt="" />

                        <div className={`${styles.app__testimonial_content}`}>
                            <p className="p-text">{testimonials[currentIndex].feedback}</p>
                            <div>
                                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.app__testimonial_btns} app__flex`}>
                        <button
                            type="button"
                            className="app__flex"
                            onClick={() =>
                                handleClick(
                                    currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
                                )
                            }
                        >
                            <HiChevronLeft />
                        </button>

                        <button
                            type="button"
                            className="app__flex"
                            onClick={() =>
                                handleClick(
                                    currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
                                )
                            }
                        >
                            <HiChevronRight />
                        </button>
                    </div>
                </>
            )}
        </>
    );
}

export default AppWrap(
    MotionWrap(Testimonial, "app__testimonial"),
    "testimonial",
    "app__primarybg"
);
