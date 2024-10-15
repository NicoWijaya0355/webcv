import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () =>{
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Nico</h1>
            <p className={styles.description}>A motivated and detail-oriented Informatics graduate with a strong foundation in web development and programming. Experienced in using HTML, CSS, Laravel, Vue.js, and SQL, I have successfully completed several projects that demonstrate my technical skills and ability to work collaboratively in a team environment. As a quick learner, I am eager to expand my knowledge in programming and other related fields, adapting to new challenges and technologies with enthusiasm. I am committed to continuous improvement and contributing effectively to team success. </p>
            <a href="mailto:nicowijaya56@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("hero/berwarna.png")} alt="Hero image of me" className={styles.heroImg}></img>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>

                
            
    </section>;
};
