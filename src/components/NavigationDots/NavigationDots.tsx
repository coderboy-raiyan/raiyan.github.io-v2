/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/no-array-index-key */
import React from "react";

function NavigationDots({ active }: { active: any }) {
    return (
        <div className="app__navigation">
            {["home", "about", "work", "skills", "testimonial", "contact"].map((item, index) => (
                <a
                    key={item + index}
                    style={active === item ? { backgroundColor: "#313ABC" } : {}}
                    className="app__navigation_dot"
                    href={`#${item}`}
                />
            ))}
        </div>
    );
}

export default NavigationDots;
