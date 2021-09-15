import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState, useMemo } from "react";
import StarRating from "../components/StarRating/StarRating";
import TpLink from "../components/TpLink/TpLink";
import { allOrganizations } from "../data/organizationsData";
import styles from "../styles/charities.module.css";
import { Organization } from "../types/organizationType";
import { getPropertyValue } from "../utils/helpers";

export default function Charities() {
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortBy, setSortBy] = useState("charityName");
  const [filterByRating, setFilterByRating] = useState(0);
  const [filterBySizeMin, setFilterBySizeMin] = useState(0);
  const [filterBySizeMax, setFilterBySizeMax] = useState(10000000000000000);
  const [filterByState, setFilterByState] = useState("");
  const [filterByCategory, setFilterByCategory] = useState(0);
  const [filterByName, setFilterByName] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [pageNumber, setPageNumber] = useState(0);

  let orgList = allOrganizations;

  const dependencies: any[] = [filterByRating];
  orgList = useMemo(
    () => orgList.filter((org) => org.currentRating?.rating >= filterByRating),
    [...dependencies]
  );

  dependencies.push(filterBySizeMin);
  orgList = useMemo(
    () =>
      orgList.filter(
        (org) => org.irsClassification.incomeAmount >= filterBySizeMin
      ),
    [...dependencies]
  );

  dependencies.push(filterBySizeMax);
  orgList = useMemo(
    () =>
      orgList.filter(
        (org) => org.irsClassification.incomeAmount <= filterBySizeMax
      ),
    [...dependencies]
  );

  dependencies.push(filterByState);
  orgList = useMemo(
    () =>
      filterByState !== ""
        ? orgList.filter(
            (org) => org.mailingAddress.stateOrProvince == filterByState
          )
        : orgList,
    [...dependencies]
  );

  dependencies.push(filterByCategory);
  orgList = useMemo(
    () =>
      filterByCategory
        ? orgList.filter((org) => org.category.categoryID == filterByCategory)
        : orgList,
    [...dependencies]
  );

  dependencies.push(filterByName);
  orgList = useMemo(
    () =>
      filterByName != ""
        ? orgList.filter((org) =>
            org.charityName
              ?.toLowerCase()
              .startsWith(filterByName.toLowerCase())
          )
        : orgList,
    [...dependencies]
  );

  dependencies.push(sortBy, sortOrder);
  orgList = useMemo(
    () =>
      orgList.sort((current, next) => {
        const currentVal = getPropertyValue(current, sortBy);
        const nextVal = getPropertyValue(next, sortBy);
        const a = sortOrder == "asc" ? currentVal : nextVal;
        const b = sortOrder == "asc" ? nextVal : currentVal;
        return typeof currentVal == "string" ? a.localeCompare(b) : a - b;
      }),
    [...dependencies]
  );

  const totalPages = Math.ceil(orgList.length / pageSize);

  let skip = pageNumber * pageSize;

  if (skip > orgList.length) {
    skip = 0;
    setPageNumber(0);
  }

  orgList = orgList.slice(skip, skip + pageSize);

  return (
    <>
      <div className={styles.controlsRow}>
        <input
          className={styles.controlSearch}
          type="text"
          placeholder="Search charities..."
          onChange={(e) => setFilterByName(e.target.value)}
        />
        <div className={styles.controlSort}>
          <label htmlFor="sortBy">Sort By: </label>
          <select name="sortBy" onChange={(e) => setSortBy(e.target.value)}>
            <option value="charityName">Name</option>
            <option value="currentRating.score">Score</option>
            <option value="irsClassification.incomeAmount">Size</option>
          </select>
          <select onChange={(e) => setSortOrder(e.target.value)}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>

        <div className={styles.controlPagination}>
          {pageNumber > 1 && (
            <>
              <button onClick={() => setPageNumber(pageNumber - 1)}>
                Prev
              </button>
              <button onClick={() => setPageNumber(0)}>1</button>
              <span> ... </span>
            </>
          )}
          {pageNumber > 0 && (
            <button onClick={() => setPageNumber(pageNumber - 1)}>
              {" "}
              {pageNumber}{" "}
            </button>
          )}
          <button disabled>{pageNumber + 1} </button>
          {pageNumber + 1 < totalPages && (
            <button onClick={() => setPageNumber(pageNumber + 1)}>
              {" "}
              {pageNumber + 2}{" "}
            </button>
          )}
          {pageNumber + 2 < totalPages && (
            <>
              <span> ... </span>
              <button onClick={() => setPageNumber(totalPages - 1)}>
                {totalPages}
              </button>
              <button onClick={() => setPageNumber(pageNumber + 1)}>
                Next
              </button>
            </>
          )}
        </div>

        <div className={styles.controlPageSize}>
          <label htmlFor="pageSize">Page Size: </label>
          <select
            name="pageSize"
            onChange={(e) => setPageSize(Number.parseInt(e.target.value))}
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.filters}>
          <div className={styles.sticky}>
            <div className={styles.filter}>
              <label htmlFor="rating">Rating: </label>
              <select
                name="rating"
                onChange={(e) =>
                  setFilterByRating(Number.parseInt(e.target.value))
                }
              >
                <option value="0">0+</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
              </select>
            </div>
            <div className={styles.filter}>
              <span>Filter by size: </span>
              <div>
                <label htmlFor="sizeMin">Min: </label>
                <select
                  name="sizeMin"
                  onChange={(e) =>
                    setFilterBySizeMin(Number.parseInt(e.target.value))
                  }
                >
                  <option value="0">No min</option>
                  <option value="3500000">$3,500,000+</option>
                  <option value="13500000">$13,500,000+</option>
                  <option value="50000000">$50,000,000+</option>
                </select>
              </div>
              <div>
                <label htmlFor="sizeMax">Max: </label>
                <select
                  name="sizeMax"
                  defaultValue="10000000000000000"
                  onChange={(e) =>
                    setFilterBySizeMax(Number.parseInt(e.target.value))
                  }
                >
                  <option value="3500000">$3,500,000+</option>
                  <option value="13500000">$13,500,000+</option>
                  <option value="50000000">$50,000,000+</option>
                  <option value="10000000000000000">No max</option>
                </select>
              </div>
            </div>
            <div className={styles.filter}>
              <label htmlFor="state">State: </label>
              <select
                name="state"
                onChange={(e) => setFilterByState(e.target.value)}
              >
                <option value="">Select a state</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
            </div>
            <div className={styles.filter}>
              <label htmlFor="category">Category:</label>
              <select
                name="category"
                onChange={(e) =>
                  setFilterByCategory(Number.parseInt(e.target.value))
                }
              >
                <option value="0">Select a category</option>
                <option value="1">Animals</option>
                <option value="2">Arts, Culture, Humanities</option>
                <option value="3">Education</option>
                <option value="4">Environment</option>
                <option value="5">Health</option>
                <option value="6">Human Services</option>
                <option value="7">International</option>
                <option value="8">Human and Civil Rights</option>
                <option value="9">Religion</option>
                <option value="10">Community Development</option>
                <option value="11">Research and Public Policy</option>
              </select>
            </div>
          </div>
        </div>
        <div className={styles.results}>
          <div>
            {orgList?.map((org: Organization) => (
              <div key={org.orgID} className={styles.item}>
                <div className={styles.itemHeading}>
                  <TpLink href={`/charity/${org.orgID}`}>
                    <h3>{org.charityName}</h3>
                  </TpLink>
                  <p>{org.tagLine}</p>
                  <p>
                    <i>{`${org.cause.causeName}`}</i>
                  </p>
                  <span>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    {` ${org.mailingAddress.city}, ${org.mailingAddress.stateOrProvince}`}
                  </span>
                </div>
                <div className={styles.itemScore}>
                  <StarRating rating={org.currentRating.rating} />
                  <p>Score: {org.currentRating.score} out of 100</p>
                  <p>
                    Size: $
                    {org.irsClassification.incomeAmount
                      ?.toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",") ?? 0}
                  </p>
                </div>
                <div className={styles.itemScore}>
                  <button className={styles.button}>GIVE</button>
                </div>
                <div className={styles.category}>
                  <img src={org.category.image} width={50} height={50} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
