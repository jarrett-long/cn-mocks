/* eslint-disable react-hooks/rules-of-hooks */
import { useMemo } from 'react';

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
}

export default useChainMemo;