import React from "react";
import Image from "next/image";
import TpLink from "../TpLink/TpLink";
import styles from "./charitieslist.module.css";
import StarRating from "../StarRating/StarRating";

function CharitiesList (props) {
  return (
    <div className={styles.container}>
      {
        props.charities.map(c => (
          <div key={c.id} className={styles.item}>
            <div>
              <TpLink href={`/charity/${c.id}`}>
                <h3>{c.title}</h3>
              </TpLink>
              <p>{c.description}</p>
            </div>
            <div>
            <StarRating rating={c.stars} />
            <p>Avg monthly contribution: ${c.avgMonthly}</p>
            <p>Followers: {c.followers}</p>
            <p>Growth Percentage: {c.growthPct}%</p>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default CharitiesList;
