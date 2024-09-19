import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";
export const Contact = () => {
    return <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to Reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <a href="mailto:nicowijaya56@gmail.com">
                <img href="mailto:nicowijaya56@gmail.com" src={getImageUrl("contact/emailIcon.png")} alt="Email icon "/></a>
                <a className={styles.Contact} href="mailto:nicowijaya56@gmail.com">nicowijaya56@gmail.com</a>
            </li>
            <li className={styles.link}>
                <a href="https://www.linkedin.com/in/nico-wijaya-bb6104226/">
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="Email icon "/></a>
                <a className={styles.Contact} href="https://www.linkedin.com/in/nico-wijaya-bb6104226/">Nico Wijaya</a>
            </li>
            <li className={styles.link}>
                <a href="https://api.whatsapp.com/send?phone=08977164040">
                <img src={getImageUrl("contact/wa.png")} alt="WA icon "/></a>
                <a className={styles.Contact} href="https://api.whatsapp.com/send?phone=08977164040">08977164040</a>
                
            </li>
        </ul>
    </footer>;
};
