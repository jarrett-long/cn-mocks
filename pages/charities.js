
import { useState } from 'react';
import CharitiesList from '../components/CharitiesList/CharitiesList';
import styles from '../styles/charities.module.css';
import { charities } from '../pages/api/charities';

export default function Charities() {
  const filterByStar = (event) => {
    setFilteredList(charities.filter(c => c.stars >= Number.parseInt(event.target.value)));
  }

  const [filteredList, setFilteredList] = useState(charities);

  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        <label htmlFor="starsFilter">Filter by rating: </label>
        <select name="starsFilter" onChange={(e) => filterByStar(e)}>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
          <option value="5">5+</option>
        </select>
      </div>
      <div className={styles.results}>
        <select name="Sort By">
          <option value="avgMonthly">Average Monthly Contribution</option>
          <option value="followers">Followers</option>
          <option value="growthPct">Program Growth</option>
          <option value="viewCount">Views</option>
          <option value="expenses">Total Expenses</option>
          <option value="consecutive">Consecutive 4-Star Ratings</option>
        </select>
        <CharitiesList charities={filteredList} />
      </div>
    </div>
  )
}