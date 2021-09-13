
// object = { financialRating: { score: 0 }}; 
// property = 'financialRating.score';
// returnValue => 0
export const getPropertyValue = (object, property) => {
  const properties = property.split('.');
  let returnValue = object;
  for (var i = 0; i < properties.length; i++) {
    let propertyName = properties[i];
    if (propertyName in returnValue) {
      returnValue = returnValue[propertyName];
    } else {
      return;
    }
  }
  return returnValue;
}