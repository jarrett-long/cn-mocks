import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./charitieslist.module.css";
import StarRating from "../StarRating/StarRating";

function CharitiesList (props) {
  return (
    <div className={styles.container}>
      {
        props.charities.map(c => (
          <div key={c.id} className={styles.item}>
            <h3>{c.title}</h3>
            <p>{c.description}</p>
            <div className={styles.stars}>
              <StarRating rating={c.stars} />
            </div>
            <p>Avg monthly contribution: $15.00</p>
          </div>
        ))
      }
    </div>
  );
}

export default CharitiesList;
