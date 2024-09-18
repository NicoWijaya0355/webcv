import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";
export const About = () => {
    return <section className={styles.container} id="about">
        <h2 className={styles.title}>
            About
        </h2>
        {/* <div className={styles.content}><img src={getImageUrl("about/aboutImage.png")} 
        alt="Me Sitting with a laptop" className={styles.aboutImage}/></div> */}
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
                <div className={styles.aboutItemText}>
                    <h3>FrontEnd Developer</h3>
                    <p>
                        I'm a frontend developer
                    </p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
                <div className={styles.aboutItemText}>
                    <h3>BackEnd Developer</h3>
                    <p>
                        I'm a backend developer 
                    </p>
                </div>
            </li>
            {/* <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
                <div className={styles.aboutItemText}>
                    <h3>Design</h3>
                    <p>
                        I'm a froent end dveloper dan lain lain
                    </p>
                </div>
            </li> */}
        </ul>
        </section>;
};