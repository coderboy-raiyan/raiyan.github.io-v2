/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { NavigationDots, SocialMedia } from "../components";

const AppWrap = (Component: any, idName?: string, classNames?: string) =>
    function HOC(props: any) {
        return (
            <div id={idName} className={`app__container ${classNames}`}>
                <SocialMedia />
                <div className="app__wrapper app__flex">
                    <Component {...props} />

                    <div className="copyright">
                        <p className="p-text">@2022 Raiyan</p>
                        <p className="p-text">All rights reserved</p>
                    </div>
                </div>
                <NavigationDots active={idName} />
            </div>
        );
    };

export default AppWrap;
