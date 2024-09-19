import React, {useState} from "react";

import styles from "./Navbar.module.css";
import {getImageUrl} from "../utils";
export const Navbar =() => {
     const [menuOpen, setMenuOpen] = useState(false);

     return (
     <nav className={styles.navbar}>
          <a className={styles.title} href="/">Portfolio</a>
          <div className={styles.menu}>
               
               <ul>
                    <li>
                         <a href="#about">About</a>
                    </li>
                    <li>
                         <a href="#experience">Experience</a>
                    </li>
                    <li>
                         <a href="#project">Project</a>
                    </li>
                    <li>
                         <a href="#contact">Contact</a>
                    </li>
                    <li>
                         <a href="https://drive.google.com/file/d/1hRsUDcemmNYz4bqdje4j2XvLokZpoe_e/view?usp=sharing">CV</a>
                    </li>
               </ul>
          </div>
     </nav>
     );
     
}
