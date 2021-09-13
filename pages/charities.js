import { useEffect, useState } from "react";
import CharitiesList from "../components/CharitiesList/CharitiesList";
import styles from "../styles/charities.module.css";
import { charities } from "../data/charitiesData";
import TpLink from "../components/TpLink/TpLink";

export default function Charities() {
  const [filteredList, setFilteredList] = useState(charities);
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortBy, setSortBy] = useState("stars");
  const [filterByStars, setFilterByStars] = useState(0);
  const [filterByFollowers, setFilterByFollowers] = useState(0);

  useEffect(() => {
    const filtered = charities
      .filter((c) => c.stars >= filterByStars)
      .filter((c) => c.followers >= filterByFollowers);

    setFilteredList([
      ...filtered.sort((current, next) => {
        if (sortOrder == "asc") {
          return current[sortBy] - next[sortBy];
        } else {
          return next[sortBy] - current[sortBy];
        }
      }),
    ]);
  }, [sortOrder, sortBy, filterByStars, filterByFollowers]);

  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        <div>
          <label htmlFor="stars">Filter by rating: </label>
          <select
            name="stars"
            onChange={(e) => setFilterByStars(Number.parseInt(e.target.value))}
          >
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
            <option value="5">5+</option>
          </select>
        </div>
        <div>
          <label htmlFor="followers">Filter by followers: </label>
          <select
            name="followers"
            onChange={(e) => setFilterByFollowers(Number.parseInt(e.target.value))}
          >
            <option value="100">100+</option>
            <option value="1000">1,000+</option>
            <option value="100000">100,000+</option>
            <option value="1000000">1,000,000+</option>
          </select>
        </div>
      </div>
      <div className={styles.results}>
        <p>This page is an itial proof of concept. An evolution of it with data from charitynavigator.org's api is on <TpLink href="/organizations">the organization page</TpLink></p>
        <label htmlFor="sortBy">Sort By: </label>
        <select name="sortBy" onChange={(e) => setSortBy(e.target.value)}>
          <option value="stars">Stars</option>
          <option value="avgMonthly">Average Monthly Contribution</option>
          <option value="followers">Followers</option>
          <option value="growthPct">Program Growth</option>
          <option value="viewCount">Views</option>
          <option value="expenses">Total Expenses</option>
          <option value="consecutive">Consecutive 4-Star Ratings</option>
        </select>
        <select onChange={(e) => setSortOrder(e.target.value)}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        <CharitiesList charities={filteredList} />
      </div>
    </div>
  );
}
