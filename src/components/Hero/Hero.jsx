import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () =>{
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Nico</h1>
            <p className={styles.description}>Graduated as bachelor's degree in Informatics. Has a strong interest in web development </p>
            <a href="mailto:nicowijaya56@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("hero/berwarna.png")} alt="Hero image of me" className={styles.heroImg}></img>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>

                
            
    </section>;
};