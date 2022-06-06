/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
// import { FaFacebookF } from "react-icons/fa";

function SocialMedia() {
    return (
        <div className="app__social">
            <div>
                <a href="https://twitter.com/md_tajkier" target="_blank">
                    <BsTwitter />
                </a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/tajkier-haque/" target="_blank">
                    <BsLinkedin />
                </a>
            </div>
            <div>
                <a href="https://github.com/coderboy-raiyan" target="_blank">
                    <BsGithub />
                </a>
            </div>
        </div>
    );
}

export default SocialMedia;
