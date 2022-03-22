import { useEffect, useRef, useState } from "react";

import Hand from "./Hand";
import styles from '../styles/Clap.module.css'

export default function Clap({position, clapping}) {
  return (
    <div style={{display: clapping ? "flex" : "none", position: "fixed", top: (position.y - 25) + 'px', left: (position.x - 25) + 'px', }}>
      <div className={`${clapping ? styles.hand : null} ${styles.handLeft}`}>
        <Hand fill="#0088ff"/>
      </div>
      <div className={`${clapping ? styles.hand : null} ${styles.handRight}`}>
        <Hand />
      </div>
    </div>
  ) 
}