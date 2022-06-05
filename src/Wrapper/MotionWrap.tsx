/* eslint-disable react/jsx-props-no-spreading */
import { motion } from "framer-motion";
import React from "react";

function MotionWrap(Component: any, classNames?: any) {
    return function HOC(props: any) {
        return (
            <motion.div
                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                transition={{ duration: 0.5 }}
                className={`${classNames} app__flex`}
            >
                <Component {...props} />
            </motion.div>
        );
    };
}

export default MotionWrap;
