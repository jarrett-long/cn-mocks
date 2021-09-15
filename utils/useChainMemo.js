/* eslint-disable react-hooks/rules-of-hooks */
import { useMemo } from "react";
import { getPropertyValue } from "./helpers";

// Chain dependencies together to memoize a list of functions
const useChainMemo = (list, getFunctionGroups) => {
  const functionGroups = getFunctionGroups(list);
  let newList = [];
  const dependencies = [];
  for (let i = 0; i < functionGroups.length; i++) {
    const functionGroup = functionGroups[i];
    dependencies.push(...functionGroup[0]);
    newList = useMemo(functionGroup[1], [...dependencies]);
  }
  return newList;
};

export const useFilters = (
  orgList,
  filterByRating,
  filterBySizeMin,
  filterBySizeMax,
  filterByState,
  filterByCategory,
  filterByName,
  sortBy,
  sortOrder
) => {
  const dependencies = [filterByRating];
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

  return orgList;
};

export default useChainMemo;
